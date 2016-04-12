// Generated from ./Where.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('../../index');
var WhereListener = require('./WhereListener').WhereListener;
var WhereVisitor = require('./WhereVisitor').WhereVisitor;

var grammarFileName = "Where.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3\24P\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\3\2\3\2\3\2\3\3\3\3\3",
    "\3\3\3\3\3\3\3\3\3\3\3\5\3\30\n\3\3\3\3\3\3\3\3\3\3\3\3\3\7\3 \n\3\f",
    "\3\16\3#\13\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3",
    "\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4<\n\4\3\5\3\5\3\5\3\5\7\5",
    "B\n\5\f\5\16\5E\13\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\5\6N\n\6\3\6\2\3\4",
    "\7\2\4\6\b\n\2\2Z\2\f\3\2\2\2\4\27\3\2\2\2\6;\3\2\2\2\b=\3\2\2\2\nM",
    "\3\2\2\2\f\r\7\3\2\2\r\16\5\4\3\2\16\3\3\2\2\2\17\20\b\3\1\2\20\21\7",
    "\4\2\2\21\30\5\4\3\7\22\30\5\6\4\2\23\24\7\5\2\2\24\25\5\4\3\2\25\26",
    "\7\6\2\2\26\30\3\2\2\2\27\17\3\2\2\2\27\22\3\2\2\2\27\23\3\2\2\2\30",
    "!\3\2\2\2\31\32\f\4\2\2\32\33\7\7\2\2\33 \5\4\3\5\34\35\f\3\2\2\35\36",
    "\7\b\2\2\36 \5\4\3\4\37\31\3\2\2\2\37\34\3\2\2\2 #\3\2\2\2!\37\3\2\2",
    "\2!\"\3\2\2\2\"\5\3\2\2\2#!\3\2\2\2$<\7\t\2\2%<\7\n\2\2&\'\7\21\2\2",
    "\'(\7\17\2\2(<\7\21\2\2)*\7\21\2\2*+\7\17\2\2+<\5\n\6\2,-\5\n\6\2-.",
    "\7\17\2\2./\7\21\2\2/<\3\2\2\2\60\61\5\n\6\2\61\62\7\17\2\2\62\63\5",
    "\n\6\2\63<\3\2\2\2\64\65\7\21\2\2\65\66\7\20\2\2\66<\5\b\5\2\678\5\n",
    "\6\289\7\20\2\29:\5\b\5\2:<\3\2\2\2;$\3\2\2\2;%\3\2\2\2;&\3\2\2\2;)",
    "\3\2\2\2;,\3\2\2\2;\60\3\2\2\2;\64\3\2\2\2;\67\3\2\2\2<\7\3\2\2\2=>",
    "\7\13\2\2>C\5\n\6\2?@\7\f\2\2@B\5\n\6\2A?\3\2\2\2BE\3\2\2\2CA\3\2\2",
    "\2CD\3\2\2\2DF\3\2\2\2EC\3\2\2\2FG\7\r\2\2G\t\3\2\2\2HN\7\22\2\2IN\7",
    "\23\2\2JN\7\t\2\2KN\7\n\2\2LN\7\16\2\2MH\3\2\2\2MI\3\2\2\2MJ\3\2\2\2",
    "MK\3\2\2\2ML\3\2\2\2N\13\3\2\2\2\b\27\37!;CM"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'where'", "'not'", "'('", "')'", "'and'", 
                     "'or'", "'true'", "'false'", "'['", "','", "']'", "'null'", 
                     'null', "'in'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', "OPERATOR", 
                      "ARRAYOPERATOR", "FIELD", "STRING", "NUMBER", "WS" ];

var ruleNames =  [ "where", "conditionset", "condition", "arrayconstant", 
                   "constant" ];

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
WhereParser.T__9 = 10;
WhereParser.T__10 = 11;
WhereParser.T__11 = 12;
WhereParser.OPERATOR = 13;
WhereParser.ARRAYOPERATOR = 14;
WhereParser.FIELD = 15;
WhereParser.STRING = 16;
WhereParser.NUMBER = 17;
WhereParser.WS = 18;

WhereParser.RULE_where = 0;
WhereParser.RULE_conditionset = 1;
WhereParser.RULE_condition = 2;
WhereParser.RULE_arrayconstant = 3;
WhereParser.RULE_constant = 4;

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
    this.enterRule(localctx, 0, WhereParser.RULE_where);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 10;
        this.match(WhereParser.T__0);
        this.state = 11;
        this.conditionset(0);
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


function NotSetContext(parser, ctx) {
	ConditionsetContext.call(this, parser);
    ConditionsetContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NotSetContext.prototype = Object.create(ConditionsetContext.prototype);
NotSetContext.prototype.constructor = NotSetContext;

WhereParser.NotSetContext = NotSetContext;

NotSetContext.prototype.conditionset = function() {
    return this.getTypedRuleContext(ConditionsetContext,0);
};
NotSetContext.prototype.enterRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.enterNotSet(this);
	}
};

NotSetContext.prototype.exitRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.exitNotSet(this);
	}
};

NotSetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WhereVisitor ) {
        return visitor.visitNotSet(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AndSetContext(parser, ctx) {
	ConditionsetContext.call(this, parser);
    ConditionsetContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AndSetContext.prototype = Object.create(ConditionsetContext.prototype);
AndSetContext.prototype.constructor = AndSetContext;

WhereParser.AndSetContext = AndSetContext;

AndSetContext.prototype.conditionset = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConditionsetContext);
    } else {
        return this.getTypedRuleContext(ConditionsetContext,i);
    }
};
AndSetContext.prototype.enterRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.enterAndSet(this);
	}
};

AndSetContext.prototype.exitRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.exitAndSet(this);
	}
};

AndSetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WhereVisitor ) {
        return visitor.visitAndSet(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OrSetContext(parser, ctx) {
	ConditionsetContext.call(this, parser);
    ConditionsetContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OrSetContext.prototype = Object.create(ConditionsetContext.prototype);
OrSetContext.prototype.constructor = OrSetContext;

WhereParser.OrSetContext = OrSetContext;

OrSetContext.prototype.conditionset = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConditionsetContext);
    } else {
        return this.getTypedRuleContext(ConditionsetContext,i);
    }
};
OrSetContext.prototype.enterRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.enterOrSet(this);
	}
};

OrSetContext.prototype.exitRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.exitOrSet(this);
	}
};

OrSetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WhereVisitor ) {
        return visitor.visitOrSet(this);
    } else {
        return visitor.visitChildren(this);
    }
};



WhereParser.prototype.conditionset = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ConditionsetContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, WhereParser.RULE_conditionset, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 21;
        switch(this._input.LA(1)) {
        case WhereParser.T__1:
            localctx = new NotSetContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 14;
            this.match(WhereParser.T__1);
            this.state = 15;
            this.conditionset(5);
            break;
        case WhereParser.T__6:
        case WhereParser.T__7:
        case WhereParser.T__11:
        case WhereParser.FIELD:
        case WhereParser.STRING:
        case WhereParser.NUMBER:
            localctx = new AtomicSetContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 16;
            this.condition();
            break;
        case WhereParser.T__2:
            localctx = new ParenSetContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 17;
            this.match(WhereParser.T__2);
            this.state = 18;
            this.conditionset(0);
            this.state = 19;
            this.match(WhereParser.T__3);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 31;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 29;
                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new AndSetContext(this, new ConditionsetContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, WhereParser.RULE_conditionset);
                    this.state = 23;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 24;
                    this.match(WhereParser.T__4);
                    this.state = 25;
                    this.conditionset(3);
                    break;

                case 2:
                    localctx = new OrSetContext(this, new ConditionsetContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, WhereParser.RULE_conditionset);
                    this.state = 26;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 27;
                    this.match(WhereParser.T__5);
                    this.state = 28;
                    this.conditionset(2);
                    break;

                } 
            }
            this.state = 33;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
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


function ConstArrayConditionContext(parser, ctx) {
	ConditionContext.call(this, parser);
    ConditionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConstArrayConditionContext.prototype = Object.create(ConditionContext.prototype);
ConstArrayConditionContext.prototype.constructor = ConstArrayConditionContext;

WhereParser.ConstArrayConditionContext = ConstArrayConditionContext;

ConstArrayConditionContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};

ConstArrayConditionContext.prototype.ARRAYOPERATOR = function() {
    return this.getToken(WhereParser.ARRAYOPERATOR, 0);
};

ConstArrayConditionContext.prototype.arrayconstant = function() {
    return this.getTypedRuleContext(ArrayconstantContext,0);
};
ConstArrayConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.enterConstArrayCondition(this);
	}
};

ConstArrayConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.exitConstArrayCondition(this);
	}
};

ConstArrayConditionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WhereVisitor ) {
        return visitor.visitConstArrayCondition(this);
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


function TrueConditionContext(parser, ctx) {
	ConditionContext.call(this, parser);
    ConditionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TrueConditionContext.prototype = Object.create(ConditionContext.prototype);
TrueConditionContext.prototype.constructor = TrueConditionContext;

WhereParser.TrueConditionContext = TrueConditionContext;

TrueConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.enterTrueCondition(this);
	}
};

TrueConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.exitTrueCondition(this);
	}
};

TrueConditionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WhereVisitor ) {
        return visitor.visitTrueCondition(this);
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


function FalseConditionContext(parser, ctx) {
	ConditionContext.call(this, parser);
    ConditionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FalseConditionContext.prototype = Object.create(ConditionContext.prototype);
FalseConditionContext.prototype.constructor = FalseConditionContext;

WhereParser.FalseConditionContext = FalseConditionContext;

FalseConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.enterFalseCondition(this);
	}
};

FalseConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WhereListener ) {
        listener.exitFalseCondition(this);
	}
};

FalseConditionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WhereVisitor ) {
        return visitor.visitFalseCondition(this);
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
    this.enterRule(localctx, 4, WhereParser.RULE_condition);
    try {
        this.state = 57;
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            localctx = new TrueConditionContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 34;
            this.match(WhereParser.T__6);
            break;

        case 2:
            localctx = new FalseConditionContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 35;
            this.match(WhereParser.T__7);
            break;

        case 3:
            localctx = new FieldFieldConditionContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 36;
            this.match(WhereParser.FIELD);
            this.state = 37;
            this.match(WhereParser.OPERATOR);
            this.state = 38;
            this.match(WhereParser.FIELD);
            break;

        case 4:
            localctx = new FieldConstConditionContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 39;
            this.match(WhereParser.FIELD);
            this.state = 40;
            this.match(WhereParser.OPERATOR);
            this.state = 41;
            this.constant();
            break;

        case 5:
            localctx = new ConstFieldConditionContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 42;
            this.constant();
            this.state = 43;
            this.match(WhereParser.OPERATOR);
            this.state = 44;
            this.match(WhereParser.FIELD);
            break;

        case 6:
            localctx = new ConstConstConditionContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 46;
            this.constant();
            this.state = 47;
            this.match(WhereParser.OPERATOR);
            this.state = 48;
            this.constant();
            break;

        case 7:
            localctx = new FieldArrayConditionContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 50;
            this.match(WhereParser.FIELD);
            this.state = 51;
            this.match(WhereParser.ARRAYOPERATOR);
            this.state = 52;
            this.arrayconstant();
            break;

        case 8:
            localctx = new ConstArrayConditionContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 53;
            this.constant();
            this.state = 54;
            this.match(WhereParser.ARRAYOPERATOR);
            this.state = 55;
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
    this.enterRule(localctx, 6, WhereParser.RULE_arrayconstant);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this.match(WhereParser.T__8);
        this.state = 60;
        this.constant();
        this.state = 65;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===WhereParser.T__9) {
            this.state = 61;
            this.match(WhereParser.T__9);
            this.state = 62;
            this.constant();
            this.state = 67;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 68;
        this.match(WhereParser.T__10);
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
    this.enterRule(localctx, 8, WhereParser.RULE_constant);
    try {
        this.state = 75;
        switch(this._input.LA(1)) {
        case WhereParser.STRING:
            localctx = new StringConstContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 70;
            this.match(WhereParser.STRING);
            break;
        case WhereParser.NUMBER:
            localctx = new NumberConstContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 71;
            this.match(WhereParser.NUMBER);
            break;
        case WhereParser.T__6:
            localctx = new TrueConstContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 72;
            this.match(WhereParser.T__6);
            break;
        case WhereParser.T__7:
            localctx = new FalseConstContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 73;
            this.match(WhereParser.T__7);
            break;
        case WhereParser.T__11:
            localctx = new NullConstContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 74;
            this.match(WhereParser.T__11);
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


WhereParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.conditionset_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

WhereParser.prototype.conditionset_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		case 1:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.WhereParser = WhereParser;
