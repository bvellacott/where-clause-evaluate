var Where = {};

Where.compile = (function(){
	var createUnit = function(whereSource, targetSource) {
		return {
			name : name,
			whereSource : whereSource,
			targetSource : targetSource,
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
	
	return function(name, whereSource) {
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
			return { source : this.compileConditionSet(ids) };
		},
		compileConditionSet : function(ctx) {
			if(ctx instanceof antlr4.WhereParser.AtomicSetContext)
				return this.compileCondition(ctx.condition(0));
			if(ctx instanceof antlr4.WhereParser.ParenSetContext)
				return this.compileParenthesisedConditionSet(ctx.conditionset(0));
			if(ctx instanceof antlr4.WhereParser.AndOrSetContext)
				return this.compileAndOrConditionSet(ctx);
			throw 'Unknown condition set context: ' + ctx.getText();
		},
		compileCondition : function(ctx) {
			var term1Src = this.compileConditionTerm(ctx.children[0]);
			var term2Src = this.compileConditionTerm(ctx.children[2]);
			var op = ctx.children[1];
			if(op.getText() === '=')
				return Where.sourceGenerators.generateEqualsCondition(term1Src, term2Src);
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
				for(var i = 0; i < ctx.constant(i); i++)
					constSrcs.push(this.compileConditionTerm(ctx.constant(i)));
				return Where.sourceGenerators.generateArrayConstant(constSrcs);
			}
			throw 'Unknown'
		},
	}
})();

Where.sourceGenerators = (function(){
	return {
		generateEqualsCondition : function(term1Src, term2Src) {
			return term1Src + ' = ' + term2Src;
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
		generateInCondition : function(term1Src, term2Src) {
			return term1Src + ' >= ' + term2Src;
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
})();
