var Where = {};

Where.newEvaluator = function(settings) { 
	var cache;
	if(settings.cache)
		cache = {};
	return function(record, whereClause) {
		var compiledClause;
		if(cache && cache[whereClause])
			compiledClause = cache[whereClause];
		else {
			compiledClause = Where.compile(whereClause).compiledClause;
			if(cache)
				cache[whereClause] = compiledClause;
		}
		return compiledClause(record);
	};
};

Where.compile = (function(){
	var createUnit = function(whereSource, targetSource) {
		eval("var compiledClause = " + targetSource + ';');
		return {
			name : name,
			whereSource : whereSource,
			targetSource : targetSource,
			compiledClause : compiledClause,
		};
	}
	
	var getParseTree = function(source) {
		var chars = new antlr4.InputStream(source);
		var lexer = new antlr4.WhereLexer(chars);
		var tokens = new antlr4.CommonTokenStream(lexer);
		var parser = new antlr4.WhereParser(tokens);
		parser.buildParseTrees = true;
		return parser.where();
	}
	
	return function(whereSource) {
		var tree = getParseTree(whereSource);
		var result = Where.jsCompilers.compileWhere(tree)
		return createUnit(whereSource, result.source);
	};
})();

Where.constants = {
	recordVarName : 'rec'
};

Where.jsCompilers = (function(){
	return {
		compileWhere : function(ctx) {
			var conditionSetSrc = this.compileConditionSet(ctx.conditionset(0));
			var src = Where.sourceGenerators.generateWhere(conditionSetSrc);
			return { source : src };
		},
		compileConditionSet : function(ctx) {
			if(ctx instanceof antlr4.WhereParser.AtomicSetContext)
				return this.compileCondition(ctx.condition(0));
			if(ctx instanceof antlr4.WhereParser.ParenSetContext)
				return this.compileParenthesisedConditionSet(ctx.conditionset(0));
			if(ctx instanceof antlr4.WhereParser.AndSetContext)
				return this.compileAndConditionSet(ctx);
			if(ctx instanceof antlr4.WhereParser.OrSetContext)
				return this.compileOrConditionSet(ctx);
			if(ctx instanceof antlr4.WhereParser.NotSetContext)
				return this.compileNotConditionSet(ctx);
			throw 'Unknown condition set context: ' + ctx.getText();
		},
		compileParenthesisedConditionSet : function(ctx) {
			var innerConditionSetSrc = this.compileConditionSet(ctx.conditionset(0));
			return Where.sourceGenerators.generateParenthesisedConditionSet(innerConditionSetSrc);
		},
		compileAndConditionSet : function(ctx) {
			var set1Src = this.compileConditionSet(ctx.conditionset(0));
			var set2Src = this.compileConditionSet(ctx.conditionset(1));
			return Where.sourceGenerators.generateAndConditionSet(set1Src, set2Src);
		},
		compileOrConditionSet : function(ctx) {
			var set1Src = this.compileConditionSet(ctx.conditionset(0));
			var set2Src = this.compileConditionSet(ctx.conditionset(1));
			return Where.sourceGenerators.generateOrConditionSet(set1Src, set2Src);
		},
		compileNotConditionSet : function(ctx) {
			var setSrc = this.compileConditionSet(ctx.conditionset(0));
			return Where.sourceGenerators.generateNotConditionSet(setSrc);
		},
		compileCondition : function(ctx) {
			if(ctx.getText() === 'true')
				return Where.sourceGenerators.generateTrueCondition();
			if(ctx.getText() === 'false')
				return Where.sourceGenerators.generateFalseCondition();
			var term1Src = this.compileConditionTerm(ctx.children[0]);
			var term2Src = this.compileConditionTerm(ctx.children[2]);
			var op = ctx.children[1];
			if(op.getText() === '=')
				return Where.sourceGenerators.generateEqualsCondition(term1Src, term2Src);
			if(op.getText() === '!=')
				return Where.sourceGenerators.generateNotEqualsCondition(term1Src, term2Src);
			if(op.getText() === '<')
				return Where.sourceGenerators.generateLessThanCondition(term1Src, term2Src);
			if(op.getText() === '<=')
				return Where.sourceGenerators.generateLessThanOrEqCondition(term1Src, term2Src);
			if(op.getText() === '>')
				return Where.sourceGenerators.generateGreaterThanCondition(term1Src, term2Src);
			if(op.getText() === '>=')
				return Where.sourceGenerators.generateGreaterThanOrEqCondition(term1Src, term2Src);
			if(op.getText() === 'in')
				return Where.sourceGenerators.generateInCondition(term1Src, term2Src);
			throw 'Unknown operator: ' + op.getText();
		},
		compileConditionTerm : function(ctx) {
			if(ctx.symbol && ctx.symbol.type === antlr4.WhereParser.FIELD)
				return Where.sourceGenerators.generateField(ctx.getText());
			if(ctx instanceof antlr4.WhereParser.StringConstContext)
				return Where.sourceGenerators.generateStringConstant(ctx.getText());
			if(ctx instanceof antlr4.WhereParser.NumberConstContext)
				return Where.sourceGenerators.generateStringConstant(ctx.getText());
			if(ctx instanceof antlr4.WhereParser.TrueConstContext)
				return Where.sourceGenerators.generateTrueConstant(ctx.getText());
			if(ctx instanceof antlr4.WhereParser.FalseConstContext)
				return Where.sourceGenerators.generateFalseConstant(ctx.getText());
			if(ctx instanceof antlr4.WhereParser.NullConstContext)
				return Where.sourceGenerators.generateNullConstant(ctx.getText());
			if(ctx instanceof antlr4.WhereParser.ArrayconstantContext) {
				var constSrcs = [];
				for(var i = 0; ctx.constant(i); i++)
					constSrcs.push(this.compileConditionTerm(ctx.constant(i)));
				return Where.sourceGenerators.generateArrayConstant(constSrcs);
			}
			throw 'Unknown'
		},
	}
})();

Where.sourceGenerators = (function(){
	return {
		generateWhere : function(conditionSetSrc) {
			return 'function(' + Where.constants.recordVarName + ') {\n\treturn ' + conditionSetSrc + '\n}';
		},
		generateParenthesisedConditionSet : function(innerConditionSetSrc) {
			return '(' + innerConditionSetSrc + ')';
		},
		generateAndConditionSet : function(set1Src, set2Src) {
			return set1Src + ' && ' + set2Src;
		},
		generateOrConditionSet : function(set1Src, set2Src) {
			return set1Src + ' || ' + set2Src;
		},
		generateNotConditionSet : function(setSrc) {
			return '!' + setSrc;
		},
		generateTrueCondition : function() {
			return 'true';
		},
		generateFalseCondition : function() {
			return 'false';
		},
		generateEqualsCondition : function(term1Src, term2Src) {
			return term1Src + ' === ' + term2Src;
		},
		generateNotEqualsCondition : function(term1Src, term2Src) {
			return term1Src + ' !== ' + term2Src;
		},
		generateLessThanCondition : function(term1Src, term2Src) {
			return term1Src + ' < ' + term2Src;
		},
		generateLessThanOrEqCondition : function(term1Src, term2Src) {
			return term1Src + ' <= ' + term2Src;
		},
		generateGreaterThanCondition : function(term1Src, term2Src) {
			return term1Src + ' > ' + term2Src;
		},
		generateGreaterThanOrEqCondition : function(term1Src, term2Src) {
			return term1Src + ' >= ' + term2Src;
		},
		generateInCondition : function(term1Src, arrayTermSrc) {
			return arrayTermSrc + ".indexOf(" + term1Src + ") >= 0";
		},
		generateField : function(fieldName) {
			return Where.constants.recordVarName + '["' + fieldName + '"]';
		},
		generateStringConstant : function(string) {
			return string;
		},
		generateTrueConstant : function(string) {
			return 'true';
		},
		generateFalseConstant : function() {
			return 'false';
		},
		generateNullConstant : function() {
			return 'null';
		},
		generateArrayConstant : function(constSrcs) {
			return '[' + constSrcs.join(',') + ']';
		},
	};
})();
