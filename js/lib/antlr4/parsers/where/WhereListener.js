// Generated from ./Where.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('../../index');

// This class defines a complete listener for a parse tree produced by WhereParser.
function WhereListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

WhereListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
WhereListener.prototype.constructor = WhereListener;

// Enter a parse tree produced by WhereParser#arrayconstant.
WhereListener.prototype.enterArrayconstant = function(ctx) {
};

// Exit a parse tree produced by WhereParser#arrayconstant.
WhereListener.prototype.exitArrayconstant = function(ctx) {
};


// Enter a parse tree produced by WhereParser#where.
WhereListener.prototype.enterWhere = function(ctx) {
};

// Exit a parse tree produced by WhereParser#where.
WhereListener.prototype.exitWhere = function(ctx) {
};


// Enter a parse tree produced by WhereParser#atomicSet.
WhereListener.prototype.enterAtomicSet = function(ctx) {
};

// Exit a parse tree produced by WhereParser#atomicSet.
WhereListener.prototype.exitAtomicSet = function(ctx) {
};


// Enter a parse tree produced by WhereParser#parenSet.
WhereListener.prototype.enterParenSet = function(ctx) {
};

// Exit a parse tree produced by WhereParser#parenSet.
WhereListener.prototype.exitParenSet = function(ctx) {
};


// Enter a parse tree produced by WhereParser#andOrSet.
WhereListener.prototype.enterAndOrSet = function(ctx) {
};

// Exit a parse tree produced by WhereParser#andOrSet.
WhereListener.prototype.exitAndOrSet = function(ctx) {
};


// Enter a parse tree produced by WhereParser#and.
WhereListener.prototype.enterAnd = function(ctx) {
};

// Exit a parse tree produced by WhereParser#and.
WhereListener.prototype.exitAnd = function(ctx) {
};


// Enter a parse tree produced by WhereParser#or.
WhereListener.prototype.enterOr = function(ctx) {
};

// Exit a parse tree produced by WhereParser#or.
WhereListener.prototype.exitOr = function(ctx) {
};


// Enter a parse tree produced by WhereParser#fieldFieldCondition.
WhereListener.prototype.enterFieldFieldCondition = function(ctx) {
};

// Exit a parse tree produced by WhereParser#fieldFieldCondition.
WhereListener.prototype.exitFieldFieldCondition = function(ctx) {
};


// Enter a parse tree produced by WhereParser#fieldConstCondition.
WhereListener.prototype.enterFieldConstCondition = function(ctx) {
};

// Exit a parse tree produced by WhereParser#fieldConstCondition.
WhereListener.prototype.exitFieldConstCondition = function(ctx) {
};


// Enter a parse tree produced by WhereParser#constFieldCondition.
WhereListener.prototype.enterConstFieldCondition = function(ctx) {
};

// Exit a parse tree produced by WhereParser#constFieldCondition.
WhereListener.prototype.exitConstFieldCondition = function(ctx) {
};


// Enter a parse tree produced by WhereParser#constConstCondition.
WhereListener.prototype.enterConstConstCondition = function(ctx) {
};

// Exit a parse tree produced by WhereParser#constConstCondition.
WhereListener.prototype.exitConstConstCondition = function(ctx) {
};


// Enter a parse tree produced by WhereParser#fieldArrayCondition.
WhereListener.prototype.enterFieldArrayCondition = function(ctx) {
};

// Exit a parse tree produced by WhereParser#fieldArrayCondition.
WhereListener.prototype.exitFieldArrayCondition = function(ctx) {
};


// Enter a parse tree produced by WhereParser#stringConst.
WhereListener.prototype.enterStringConst = function(ctx) {
};

// Exit a parse tree produced by WhereParser#stringConst.
WhereListener.prototype.exitStringConst = function(ctx) {
};


// Enter a parse tree produced by WhereParser#numberConst.
WhereListener.prototype.enterNumberConst = function(ctx) {
};

// Exit a parse tree produced by WhereParser#numberConst.
WhereListener.prototype.exitNumberConst = function(ctx) {
};


// Enter a parse tree produced by WhereParser#trueConst.
WhereListener.prototype.enterTrueConst = function(ctx) {
};

// Exit a parse tree produced by WhereParser#trueConst.
WhereListener.prototype.exitTrueConst = function(ctx) {
};


// Enter a parse tree produced by WhereParser#falseConst.
WhereListener.prototype.enterFalseConst = function(ctx) {
};

// Exit a parse tree produced by WhereParser#falseConst.
WhereListener.prototype.exitFalseConst = function(ctx) {
};


// Enter a parse tree produced by WhereParser#nullConst.
WhereListener.prototype.enterNullConst = function(ctx) {
};

// Exit a parse tree produced by WhereParser#nullConst.
WhereListener.prototype.exitNullConst = function(ctx) {
};



exports.WhereListener = WhereListener;