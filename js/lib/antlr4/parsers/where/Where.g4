grammar Where;

OPERATOR 
	: '<'
	| '<='
	| '>'
	| '>='
	| '='
	;

ARRAYOPERATOR   
	: 'in'
	;

FIELD 
	: [$a-zA-Z_]{1}[$a-zA-Z_0-9]+ 
	;

arrayconstant 
	: '(' constant (',' constant)* ')'
	;
	
where 
	: 'where' conditionset
	;

conditionset 
	: condition 																	# atomicSet
	| '(' conditionset ')'															# parenSet
	| (condition|'(' conditionset ')') (('and'|'or') (condition|'(' conditionset ')'))+ # andOrSet
	;

condition 
	: FIELD OPERATOR FIELD						# fieldFieldCondition
	| FIELD OPERATOR constant					# fieldConstCondition
	| constant OPERATOR FIELD 					# constFieldCondition
	| constant OPERATOR constant				# constConstCondition
	| FIELD ARRAYOPERATOR arrayconstant			# fieldArrayCondition
	;

constant
	:	STRING					# stringConst
	|	NUMBER					# numberConst
	|	'true' 					# trueConst
	|	'false'					# falseConst
	|	'null'					# nullConst
	;
	
STRING 
	:	'"' (ESC | ~["\\])* '"' 
	;
	
fragment ESC 
	:	'\\' (["\\/bfnrt] | UNICODE) 
	;
fragment UNICODE 
	: 'u' HEX HEX HEX HEX 
	;
fragment HEX 
	: [0-9a-fA-F] 
	;
	
NUMBER
	:	INT '.' [0-9]+ EXP? 	// 1.35, 1.35E-9, 0.3, -4.5
	|	INT EXP				// 1e10 -3e4
	|	INT					// -3, 45
	;
	
fragment INT 
	:	'0' | [1-9] [0-9]*			// no leading zeros
	;
fragment EXP 
	:	[Ee] INT 			// \- since - means "range" inside [...]
	;

// Whitespace is ignored 
WS 
	: [ \t\r\n]+ -> skip 
	; 
