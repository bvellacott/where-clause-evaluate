# where clause evaluate

Where clause parser, compiler, evaluator - A javascript tool to evaluate where clauses against objects in Ember.js 

Works like so:
```
var Where = require("where-clause-evaluate");

var record = { 
  firstName : 'Rudolf', 
  nickName : 'Rednose', 
  lastName : 'Reindeer', 
  isEnlightening : true
};

var evaluate = Where.newEvaluator({ cache : true }); // { cache : true }, so that the same clause doesn't get compiled more than once

console.log("We have an enlightening rednose amongst ourselves : " + evaluate(record, 'where firstName = "Rudolf" and isEnlightening = true'));
```
Supports precedence -> meaning brackets, and the operators/operations:

=, !=, <, <=, >, >=, in (for constant arrays), and, or, not <- all case sensitive

see the file js/lib/anlr4/parsers/where/Where.g4 for the grammar

I'm currently using this as a where clause/query evaluator for an Ember.js local datastorage adapter

As the project is based on antlr - the compiler is quickly rewritten in java, .net or C and made to execute against an sql, 
nosql or orm where clause 

Thanks goes to the antlr4 dudes for creating such a great tool for creating parsers: www.antlr.org

