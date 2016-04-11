// Generated from ./Where.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('../../index');
var WhereListener = require('./WhereListener').WhereListener;
var WhereVisitor = require('./WhereVisitor').WhereVisitor;

var grammarFileName = "Where.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3\21Z\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\3\2\3",
    "\2\3\2\3\2\7\2\25\n\2\f\2\16\2\30\13\2\3\2\3\2\3\3\3\3\3\3\3\4\3\4\3",
    "\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4)\n\4\3\4\3\4\5\4-\n\4\3\4\3\4\3\4",
    "\3\4\3\4\5\4\64\n\4\6\4\66\n\4\r\4\16\4\67\5\4:\n\4\3\5\3\5\3\6\3\6",
    "\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7",
    "\5\7Q\n\7\3\b\3\b\3\b\3\b\3\b\5\bX\n\b\3\b\2\2\t\2\4\6\b\n\f\16\2\2",
    "a\2\20\3\2\2\2\4\33\3\2\2\2\69\3\2\2\2\b;\3\2\2\2\n=\3\2\2\2\fP\3\2",
    "\2\2\16W\3\2\2\2\20\21\7\3\2\2\21\26\5\16\b\2\22\23\7\4\2\2\23\25\5",
    "\16\b\2\24\22\3\2\2\2\25\30\3\2\2\2\26\24\3\2\2\2\26\27\3\2\2\2\27\31",
    "\3\2\2\2\30\26\3\2\2\2\31\32\7\5\2\2\32\3\3\2\2\2\33\34\7\6\2\2\34\35",
    "\5\6\4\2\35\5\3\2\2\2\36:\5\f\7\2\37 \7\3\2\2 !\5\6\4\2!\"\7\5\2\2\"",
    ":\3\2\2\2#)\5\f\7\2$%\7\3\2\2%&\5\6\4\2&\'\7\5\2\2\')\3\2\2\2(#\3\2",
    "\2\2($\3\2\2\2)\65\3\2\2\2*-\5\b\5\2+-\5\n\6\2,*\3\2\2\2,+\3\2\2\2-",
    "\63\3\2\2\2.\64\5\f\7\2/\60\7\3\2\2\60\61\5\6\4\2\61\62\7\5\2\2\62\64",
    "\3\2\2\2\63.\3\2\2\2\63/\3\2\2\2\64\66\3\2\2\2\65,\3\2\2\2\66\67\3\2",
    "\2\2\67\65\3\2\2\2\678\3\2\2\28:\3\2\2\29\36\3\2\2\29\37\3\2\2\29(\3",
    "\2\2\2:\7\3\2\2\2;<\7\7\2\2<\t\3\2\2\2=>\7\b\2\2>\13\3\2\2\2?@\7\16",
    "\2\2@A\7\f\2\2AQ\7\16\2\2BC\7\16\2\2CD\7\f\2\2DQ\5\16\b\2EF\5\16\b\2",
    "FG\7\f\2\2GH\7\16\2\2HQ\3\2\2\2IJ\5\16\b\2JK\7\f\2\2KL\5\16\b\2LQ\3",
    "\2\2\2MN\7\16\2\2NO\7\r\2\2OQ\5\2\2\2P?\3\2\2\2PB\3\2\2\2PE\3\2\2\2",
    "PI\3\2\2\2PM\3\2\2\2Q\r\3\2\2\2RX\7\17\2\2SX\7\20\2\2TX\7\t\2\2UX\7",
    "\n\2\2VX\7\13\2\2WR\3\2\2\2WS\3\2\2\2WT\3\2\2\2WU\3\2\2\2WV\3\2\2\2",
    "X\17\3\2\2\2\n\26(,\63\679PW"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'('", "','", "')'", "'where'", "'and'", "'or'", 
                     "'true'", "'false'", "'null'", 'null', "'in'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', "OPERATOR", "ARRAYOPERATOR", 
                      "FIELD", "STRING", "NUMBER", "WS" ];

var ruleNames =  [ "arrayconstant", "where", "conditionset", "and", "or", 
                   "condition", "constant" ];

function WhereParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

WhereParser.prototype = Object.create(antlr4.Parser.prototype);
WhereParser.prototype.constructor = WhereParser;

Object.defineProperty(WhereParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

WhereParser.EOF = antlr4.Token.EOF;
WhereParser.T__0 = 1;
WhereParser.T__1 = 2;
WhereParser.T__2 = 3;
WhereParser.T__3 = 4;
WhereParser.T__4 = 5;
WhereParser.T__5 = 6;
WhereParser.T__6 = 7;
WhereParser.T__7 = 8;
WhereParser.T__8 = 9;
WhereParser.OPERATOR = 10;
WhereParser.ARRAYOPERATOR = 11;
WhereParser.FIELD = 12;
WhereParser.STRING = 13;
WhereParser.NUMBER = 14;
WhereParser.WS = 15;

WhereParser.RULE_arrayconstant = 0;
WhereParser.RULE_where = 1;
WhereParser.RULE_conditionset = 2;
WhereParser.RULE_and = 3;
WhereParser.RULE_or = 4;
WhereParser.RULE_condition = 5;
WhereParser.RULE_constant = 6;

function ArrayconstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WhereParser.RULE_arrayconstant;
    return this;
}

ArrayconstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayconstantContext.prototype.constructor = ArrayconstantContext;

ArrayconstantContext.prototype.constant = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConstantContext);
    } else {
        return this.getTypedRuleContext(ConstantContext,i);
    }
};

ArrayconstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.enterArrayconstant(this);
	}
};

ArrayconstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.exitArrayconstant(this);
	}
};

ArrayconstantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WhereVisitor ) {
        return visitor.visitArrayconstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




WhereParser.ArrayconstantContext = ArrayconstantContext;

WhereParser.prototype.arrayconstant = function() {

    var localctx = new ArrayconstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, WhereParser.RULE_arrayconstant);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 14;
        this.match(WhereParser.T__0);
        this.state = 15;
        this.constant();
        this.state = 20;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===WhereParser.T__1) {
            this.state = 16;
            this.match(WhereParser.T__1);
            this.state = 17;
            this.constant();
            this.state = 22;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 23;
        this.match(WhereParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WhereContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WhereParser.RULE_where;
    return this;
}

WhereContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhereContext.prototype.constructor = WhereContext;

WhereContext.prototype.conditionset = function() {
    return this.getTypedRuleContext(ConditionsetContext,0);
};

WhereContext.prototype.enterRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.enterWhere(this);
	}
};

WhereContext.prototype.exitRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.exitWhere(this);
	}
};

WhereContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WhereVisitor ) {
        return visitor.visitWhere(this);
    } else {
        return visitor.visitChildren(this);
    }
};




WhereParser.WhereContext = WhereContext;

WhereParser.prototype.where = function() {

    var localctx = new WhereContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, WhereParser.RULE_where);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 25;
        this.match(WhereParser.T__3);
        this.state = 26;
        this.conditionset();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConditionsetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WhereParser.RULE_conditionset;
    return this;
}

ConditionsetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionsetContext.prototype.constructor = ConditionsetContext;


 
ConditionsetContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ParenSetContext(parser, ctx) {
	ConditionsetContext.call(this, parser);
    ConditionsetContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenSetContext.prototype = Object.create(ConditionsetContext.prototype);
ParenSetContext.prototype.constructor = ParenSetContext;

WhereParser.ParenSetContext = ParenSetContext;

ParenSetContext.prototype.conditionset = function() {
    return this.getTypedRuleContext(ConditionsetContext,0);
};
ParenSetContext.prototype.enterRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.enterParenSet(this);
	}
};

ParenSetContext.prototype.exitRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.exitParenSet(this);
	}
};

ParenSetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WhereVisitor ) {
        return visitor.visitParenSet(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AtomicSetContext(parser, ctx) {
	ConditionsetContext.call(this, parser);
    ConditionsetContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AtomicSetContext.prototype = Object.create(ConditionsetContext.prototype);
AtomicSetContext.prototype.constructor = AtomicSetContext;

WhereParser.AtomicSetContext = AtomicSetContext;

AtomicSetContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};
AtomicSetContext.prototype.enterRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.enterAtomicSet(this);
	}
};

AtomicSetContext.prototype.exitRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.exitAtomicSet(this);
	}
};

AtomicSetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WhereVisitor ) {
        return visitor.visitAtomicSet(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AndOrSetContext(parser, ctx) {
	ConditionsetContext.call(this, parser);
    ConditionsetContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AndOrSetContext.prototype = Object.create(ConditionsetContext.prototype);
AndOrSetContext.prototype.constructor = AndOrSetContext;

WhereParser.AndOrSetContext = AndOrSetContext;

AndOrSetContext.prototype.condition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConditionContext);
    } else {
        return this.getTypedRuleContext(ConditionContext,i);
    }
};

AndOrSetContext.prototype.conditionset = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConditionsetContext);
    } else {
        return this.getTypedRuleContext(ConditionsetContext,i);
    }
};

AndOrSetContext.prototype.and = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AndContext);
    } else {
        return this.getTypedRuleContext(AndContext,i);
    }
};

AndOrSetContext.prototype.or = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OrContext);
    } else {
        return this.getTypedRuleContext(OrContext,i);
    }
};
AndOrSetContext.prototype.enterRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.enterAndOrSet(this);
	}
};

AndOrSetContext.prototype.exitRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.exitAndOrSet(this);
	}
};

AndOrSetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WhereVisitor ) {
        return visitor.visitAndOrSet(this);
    } else {
        return visitor.visitChildren(this);
    }
};



WhereParser.ConditionsetContext = ConditionsetContext;

WhereParser.prototype.conditionset = function() {

    var localctx = new ConditionsetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, WhereParser.RULE_conditionset);
    var _la = 0; // Token type
    try {
        this.state = 55;
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            localctx = new AtomicSetContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 28;
            this.condition();
            break;

        case 2:
            localctx = new ParenSetContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 29;
            this.match(WhereParser.T__0);
            this.state = 30;
            this.conditionset();
            this.state = 31;
            this.match(WhereParser.T__2);
            break;

        case 3:
            localctx = new AndOrSetContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 38;
            switch(this._input.LA(1)) {
            case WhereParser.T__6:
            case WhereParser.T__7:
            case WhereParser.T__8:
            case WhereParser.FIELD:
            case WhereParser.STRING:
            case WhereParser.NUMBER:
                this.state = 33;
                this.condition();
                break;
            case WhereParser.T__0:
                this.state = 34;
                this.match(WhereParser.T__0);
                this.state = 35;
                this.conditionset();
                this.state = 36;
                this.match(WhereParser.T__2);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 51; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 42;
                switch(this._input.LA(1)) {
                case WhereParser.T__4:
                    this.state = 40;
                    this.and();
                    break;
                case WhereParser.T__5:
                    this.state = 41;
                    this.or();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 49;
                switch(this._input.LA(1)) {
                case WhereParser.T__6:
                case WhereParser.T__7:
                case WhereParser.T__8:
                case WhereParser.FIELD:
                case WhereParser.STRING:
                case WhereParser.NUMBER:
                    this.state = 44;
                    this.condition();
                    break;
                case WhereParser.T__0:
                    this.state = 45;
                    this.match(WhereParser.T__0);
                    this.state = 46;
                    this.conditionset();
                    this.state = 47;
                    this.match(WhereParser.T__2);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 53; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===WhereParser.T__4 || _la===WhereParser.T__5);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WhereParser.RULE_and;
    return this;
}

AndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AndContext.prototype.constructor = AndContext;


AndContext.prototype.enterRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.enterAnd(this);
	}
};

AndContext.prototype.exitRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.exitAnd(this);
	}
};

AndContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WhereVisitor ) {
        return visitor.visitAnd(this);
    } else {
        return visitor.visitChildren(this);
    }
};




WhereParser.AndContext = AndContext;

WhereParser.prototype.and = function() {

    var localctx = new AndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, WhereParser.RULE_and);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        this.match(WhereParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WhereParser.RULE_or;
    return this;
}

OrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OrContext.prototype.constructor = OrContext;


OrContext.prototype.enterRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.enterOr(this);
	}
};

OrContext.prototype.exitRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.exitOr(this);
	}
};

OrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WhereVisitor ) {
        return visitor.visitOr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




WhereParser.OrContext = OrContext;

WhereParser.prototype.or = function() {

    var localctx = new OrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, WhereParser.RULE_or);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this.match(WhereParser.T__5);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WhereParser.RULE_condition;
    return this;
}

ConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionContext.prototype.constructor = ConditionContext;


 
ConditionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ConstFieldConditionContext(parser, ctx) {
	ConditionContext.call(this, parser);
    ConditionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConstFieldConditionContext.prototype = Object.create(ConditionContext.prototype);
ConstFieldConditionContext.prototype.constructor = ConstFieldConditionContext;

WhereParser.ConstFieldConditionContext = ConstFieldConditionContext;

ConstFieldConditionContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};

ConstFieldConditionContext.prototype.OPERATOR = function() {
    return this.getToken(WhereParser.OPERATOR, 0);
};

ConstFieldConditionContext.prototype.FIELD = function() {
    return this.getToken(WhereParser.FIELD, 0);
};
ConstFieldConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.enterConstFieldCondition(this);
	}
};

ConstFieldConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.exitConstFieldCondition(this);
	}
};

ConstFieldConditionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WhereVisitor ) {
        return visitor.visitConstFieldCondition(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FieldArrayConditionContext(parser, ctx) {
	ConditionContext.call(this, parser);
    ConditionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FieldArrayConditionContext.prototype = Object.create(ConditionContext.prototype);
FieldArrayConditionContext.prototype.constructor = FieldArrayConditionContext;

WhereParser.FieldArrayConditionContext = FieldArrayConditionContext;

FieldArrayConditionContext.prototype.FIELD = function() {
    return this.getToken(WhereParser.FIELD, 0);
};

FieldArrayConditionContext.prototype.ARRAYOPERATOR = function() {
    return this.getToken(WhereParser.ARRAYOPERATOR, 0);
};

FieldArrayConditionContext.prototype.arrayconstant = function() {
    return this.getTypedRuleContext(ArrayconstantContext,0);
};
FieldArrayConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.enterFieldArrayCondition(this);
	}
};

FieldArrayConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.exitFieldArrayCondition(this);
	}
};

FieldArrayConditionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WhereVisitor ) {
        return visitor.visitFieldArrayCondition(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FieldFieldConditionContext(parser, ctx) {
	ConditionContext.call(this, parser);
    ConditionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FieldFieldConditionContext.prototype = Object.create(ConditionContext.prototype);
FieldFieldConditionContext.prototype.constructor = FieldFieldConditionContext;

WhereParser.FieldFieldConditionContext = FieldFieldConditionContext;

FieldFieldConditionContext.prototype.FIELD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(WhereParser.FIELD);
    } else {
        return this.getToken(WhereParser.FIELD, i);
    }
};


FieldFieldConditionContext.prototype.OPERATOR = function() {
    return this.getToken(WhereParser.OPERATOR, 0);
};
FieldFieldConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.enterFieldFieldCondition(this);
	}
};

FieldFieldConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.exitFieldFieldCondition(this);
	}
};

FieldFieldConditionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WhereVisitor ) {
        return visitor.visitFieldFieldCondition(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FieldConstConditionContext(parser, ctx) {
	ConditionContext.call(this, parser);
    ConditionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FieldConstConditionContext.prototype = Object.create(ConditionContext.prototype);
FieldConstConditionContext.prototype.constructor = FieldConstConditionContext;

WhereParser.FieldConstConditionContext = FieldConstConditionContext;

FieldConstConditionContext.prototype.FIELD = function() {
    return this.getToken(WhereParser.FIELD, 0);
};

FieldConstConditionContext.prototype.OPERATOR = function() {
    return this.getToken(WhereParser.OPERATOR, 0);
};

FieldConstConditionContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};
FieldConstConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.enterFieldConstCondition(this);
	}
};

FieldConstConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.exitFieldConstCondition(this);
	}
};

FieldConstConditionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WhereVisitor ) {
        return visitor.visitFieldConstCondition(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ConstConstConditionContext(parser, ctx) {
	ConditionContext.call(this, parser);
    ConditionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConstConstConditionContext.prototype = Object.create(ConditionContext.prototype);
ConstConstConditionContext.prototype.constructor = ConstConstConditionContext;

WhereParser.ConstConstConditionContext = ConstConstConditionContext;

ConstConstConditionContext.prototype.constant = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConstantContext);
    } else {
        return this.getTypedRuleContext(ConstantContext,i);
    }
};

ConstConstConditionContext.prototype.OPERATOR = function() {
    return this.getToken(WhereParser.OPERATOR, 0);
};
ConstConstConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.enterConstConstCondition(this);
	}
};

ConstConstConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.exitConstConstCondition(this);
	}
};

ConstConstConditionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WhereVisitor ) {
        return visitor.visitConstConstCondition(this);
    } else {
        return visitor.visitChildren(this);
    }
};



WhereParser.ConditionContext = ConditionContext;

WhereParser.prototype.condition = function() {

    var localctx = new ConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, WhereParser.RULE_condition);
    try {
        this.state = 78;
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            localctx = new FieldFieldConditionContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 61;
            this.match(WhereParser.FIELD);
            this.state = 62;
            this.match(WhereParser.OPERATOR);
            this.state = 63;
            this.match(WhereParser.FIELD);
            break;

        case 2:
            localctx = new FieldConstConditionContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 64;
            this.match(WhereParser.FIELD);
            this.state = 65;
            this.match(WhereParser.OPERATOR);
            this.state = 66;
            this.constant();
            break;

        case 3:
            localctx = new ConstFieldConditionContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 67;
            this.constant();
            this.state = 68;
            this.match(WhereParser.OPERATOR);
            this.state = 69;
            this.match(WhereParser.FIELD);
            break;

        case 4:
            localctx = new ConstConstConditionContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 71;
            this.constant();
            this.state = 72;
            this.match(WhereParser.OPERATOR);
            this.state = 73;
            this.constant();
            break;

        case 5:
            localctx = new FieldArrayConditionContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 75;
            this.match(WhereParser.FIELD);
            this.state = 76;
            this.match(WhereParser.ARRAYOPERATOR);
            this.state = 77;
            this.arrayconstant();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WhereParser.RULE_constant;
    return this;
}

ConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantContext.prototype.constructor = ConstantContext;


 
ConstantContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function NumberConstContext(parser, ctx) {
	ConstantContext.call(this, parser);
    ConstantContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumberConstContext.prototype = Object.create(ConstantContext.prototype);
NumberConstContext.prototype.constructor = NumberConstContext;

WhereParser.NumberConstContext = NumberConstContext;

NumberConstContext.prototype.NUMBER = function() {
    return this.getToken(WhereParser.NUMBER, 0);
};
NumberConstContext.prototype.enterRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.enterNumberConst(this);
	}
};

NumberConstContext.prototype.exitRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.exitNumberConst(this);
	}
};

NumberConstContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WhereVisitor ) {
        return visitor.visitNumberConst(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TrueConstContext(parser, ctx) {
	ConstantContext.call(this, parser);
    ConstantContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TrueConstContext.prototype = Object.create(ConstantContext.prototype);
TrueConstContext.prototype.constructor = TrueConstContext;

WhereParser.TrueConstContext = TrueConstContext;

TrueConstContext.prototype.enterRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.enterTrueConst(this);
	}
};

TrueConstContext.prototype.exitRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.exitTrueConst(this);
	}
};

TrueConstContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WhereVisitor ) {
        return visitor.visitTrueConst(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FalseConstContext(parser, ctx) {
	ConstantContext.call(this, parser);
    ConstantContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FalseConstContext.prototype = Object.create(ConstantContext.prototype);
FalseConstContext.prototype.constructor = FalseConstContext;

WhereParser.FalseConstContext = FalseConstContext;

FalseConstContext.prototype.enterRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.enterFalseConst(this);
	}
};

FalseConstContext.prototype.exitRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.exitFalseConst(this);
	}
};

FalseConstContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WhereVisitor ) {
        return visitor.visitFalseConst(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NullConstContext(parser, ctx) {
	ConstantContext.call(this, parser);
    ConstantContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NullConstContext.prototype = Object.create(ConstantContext.prototype);
NullConstContext.prototype.constructor = NullConstContext;

WhereParser.NullConstContext = NullConstContext;

NullConstContext.prototype.enterRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.enterNullConst(this);
	}
};

NullConstContext.prototype.exitRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.exitNullConst(this);
	}
};

NullConstContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WhereVisitor ) {
        return visitor.visitNullConst(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StringConstContext(parser, ctx) {
	ConstantContext.call(this, parser);
    ConstantContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringConstContext.prototype = Object.create(ConstantContext.prototype);
StringConstContext.prototype.constructor = StringConstContext;

WhereParser.StringConstContext = StringConstContext;

StringConstContext.prototype.STRING = function() {
    return this.getToken(WhereParser.STRING, 0);
};
StringConstContext.prototype.enterRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.enterStringConst(this);
	}
};

StringConstContext.prototype.exitRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.exitStringConst(this);
	}
};

StringConstContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WhereVisitor ) {
        return visitor.visitStringConst(this);
    } else {
        return visitor.visitChildren(this);
    }
};



WhereParser.ConstantContext = ConstantContext;

WhereParser.prototype.constant = function() {

    var localctx = new ConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, WhereParser.RULE_constant);
    try {
        this.state = 85;
        switch(this._input.LA(1)) {
        case WhereParser.STRING:
            localctx = new StringConstContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 80;
            this.match(WhereParser.STRING);
            break;
        case WhereParser.NUMBER:
            localctx = new NumberConstContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 81;
            this.match(WhereParser.NUMBER);
            break;
        case WhereParser.T__6:
            localctx = new TrueConstContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 82;
            this.match(WhereParser.T__6);
            break;
        case WhereParser.T__7:
            localctx = new FalseConstContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 83;
            this.match(WhereParser.T__7);
            break;
        case WhereParser.T__8:
            localctx = new NullConstContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 84;
            this.match(WhereParser.T__8);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.WhereParser = WhereParser;
