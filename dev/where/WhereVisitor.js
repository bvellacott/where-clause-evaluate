// Generated from ./Where.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4');

// This class defines a complete generic visitor for a parse tree produced by WhereParser.

function WhereVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

WhereVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
WhereVisitor.prototype.constructor = WhereVisitor;

// Visit a parse tree produced by WhereParser#where.
WhereVisitor.prototype.visitWhere = function(ctx) {
};


// Visit a parse tree produced by WhereParser#parenSet.
WhereVisitor.prototype.visitParenSet = function(ctx) {
};


// Visit a parse tree produced by WhereParser#atomicSet.
WhereVisitor.prototype.visitAtomicSet = function(ctx) {
};


// Visit a parse tree produced by WhereParser#notSet.
WhereVisitor.prototype.visitNotSet = function(ctx) {
};


// Visit a parse tree produced by WhereParser#andSet.
WhereVisitor.prototype.visitAndSet = function(ctx) {
};


// Visit a parse tree produced by WhereParser#orSet.
WhereVisitor.prototype.visitOrSet = function(ctx) {
};


// Visit a parse tree produced by WhereParser#trueCondition.
WhereVisitor.prototype.visitTrueCondition = function(ctx) {
};


// Visit a parse tree produced by WhereParser#falseCondition.
WhereVisitor.prototype.visitFalseCondition = function(ctx) {
};


// Visit a parse tree produced by WhereParser#fieldFieldCondition.
WhereVisitor.prototype.visitFieldFieldCondition = function(ctx) {
};


// Visit a parse tree produced by WhereParser#fieldConstCondition.
WhereVisitor.prototype.visitFieldConstCondition = function(ctx) {
};


// Visit a parse tree produced by WhereParser#constFieldCondition.
WhereVisitor.prototype.visitConstFieldCondition = function(ctx) {
};


// Visit a parse tree produced by WhereParser#constConstCondition.
WhereVisitor.prototype.visitConstConstCondition = function(ctx) {
};


// Visit a parse tree produced by WhereParser#fieldArrayCondition.
WhereVisitor.prototype.visitFieldArrayCondition = function(ctx) {
};


// Visit a parse tree produced by WhereParser#constArrayCondition.
WhereVisitor.prototype.visitConstArrayCondition = function(ctx) {
};


// Visit a parse tree produced by WhereParser#arrayconstant.
WhereVisitor.prototype.visitArrayconstant = function(ctx) {
};


// Visit a parse tree produced by WhereParser#stringConst.
WhereVisitor.prototype.visitStringConst = function(ctx) {
};


// Visit a parse tree produced by WhereParser#numberConst.
WhereVisitor.prototype.visitNumberConst = function(ctx) {
};


// Visit a parse tree produced by WhereParser#trueConst.
WhereVisitor.prototype.visitTrueConst = function(ctx) {
};


// Visit a parse tree produced by WhereParser#falseConst.
WhereVisitor.prototype.visitFalseConst = function(ctx) {
};


// Visit a parse tree produced by WhereParser#nullConst.
WhereVisitor.prototype.visitNullConst = function(ctx) {
};



exports.WhereVisitor = WhereVisitor;