if(!QUnit)
	throw 'QUnit 1.19.0 or above is required';
if(!Where)
	throw 'Where compiler is required';

QUnit.test('= : equals', function(assert) {
	var evaluate = Where.newEvaluator({ cache : true });
	var record = { a : 1, b : 1, c : -1, d : null};

	assert.ok(evaluate(record, 'where a = b'), "equals evaluation on fields");
	assert.notOk(evaluate(record, 'where a = c'), "equals evaluation on unequal fields");

	assert.ok(evaluate(record, 'where a = 1'), "equals evaluation on field and constant");
	assert.notOk(evaluate(record, 'where a = -2'), "equals evaluation on unequal field and constant");

	assert.ok(evaluate(record, 'where -1 = c'), "equals evaluation on constant and field");
	assert.notOk(evaluate(record, 'where 2 = c'), "equals evaluation on unequal constant and field");

	assert.ok(evaluate(record, 'where 0.1 = 0.1'), "equals evaluation on constants");
	assert.notOk(evaluate(record, 'where 0.1 = -0.2'), "equals evaluation on unequal constants");

	assert.ok(evaluate(record, 'where d = d'), "equals evaluation on null field with itself");
	assert.notOk(evaluate(record, 'where d = c'), "equals evaluation on null and non-null fields");

	assert.ok(evaluate(record, 'where null = null'), "equals evaluation on null constants");
	assert.notOk(evaluate(record, 'where null = 1'), "equals evaluation on null and non-null constants");

	assert.ok(evaluate(record, 'where d = null'), "equals evaluation on null field and constant");
	assert.ok(evaluate(record, 'where null = d'), "equals inverse evaluation on null field and constant");

	assert.notOk(evaluate(record, 'where c = null'), "equals evaluation on non-null field and null constant");
	assert.notOk(evaluate(record, 'where null = c'), "equals inverse evaluation on non-null field and null constant");
});

QUnit.test('!= : not equals', function(assert) {
	var evaluate = Where.newEvaluator({ cache : true });
	var record = { a : -1, b : 1, c : -1, d : null};

	assert.ok(evaluate(record, 'where a != b'), "not equals evaluation on fields");
	assert.notOk(evaluate(record, 'where a != c'), "not equals evaluation on equal fields");

	assert.ok(evaluate(record, 'where a != 1'), "not equals evaluation on field and constant");
	assert.notOk(evaluate(record, 'where a != -1'), "not equals evaluation on equal field and constant");

	assert.ok(evaluate(record, 'where 1 != c'), "not equals evaluation on constant and field");
	assert.notOk(evaluate(record, 'where -1 != c'), "not equals evaluation on equal constant and field");

	assert.ok(evaluate(record, 'where 0.1 != -0.2'), "not equals evaluation on constants");
	assert.notOk(evaluate(record, 'where 0.1 != 0.1'), "not equals evaluation on equal constants");

	assert.notOk(evaluate(record, 'where d != d'), "not equals evaluation on null field with itself");
	assert.ok(evaluate(record, 'where d != c'), "not equals evaluation on null and non-null fields");

	assert.notOk(evaluate(record, 'where null != null'), "not equals evaluation on null constants");
	assert.ok(evaluate(record, 'where null != 1'), "not equals evaluation on null and non-null constants");

	assert.notOk(evaluate(record, 'where d != null'), "not equals evaluation on null field and constant");
	assert.notOk(evaluate(record, 'where null != d'), "not equals inverse evaluation on null field and constant");

	assert.ok(evaluate(record, 'where c != null'), "not equals evaluation on non-null field and null constant");
	assert.ok(evaluate(record, 'where null != c'), "not equals inverse evaluation on non-null field and null constant");
});

QUnit.test('< : less than', function(assert) {
	var evaluate = Where.newEvaluator({ cache : true });
	var record = { a : -1, b : 1 };

	assert.ok(evaluate(record, 'where a < b'), "less than evaluation on fields");
	assert.notOk(evaluate(record, 'where b < a'), "less than inverse evaluation on fields");

	assert.ok(evaluate(record, 'where a < 0'), "less than evaluation on field and constant");
	assert.notOk(evaluate(record, 'where 0 < a'), "less than inverse evaluation on field and constant");

	assert.ok(evaluate(record, 'where 0 < b'), "less than evaluation on constant and field");
	assert.notOk(evaluate(record, 'where b < 0'), "less than inverse evaluation on constant and field");

	assert.ok(evaluate(record, 'where -0.2 < 0.1'), "less than evaluation on constants");
	assert.notOk(evaluate(record, 'where 0.1 < -0.2'), "less than inverse evaluation on constants");
	assert.notOk(evaluate(record, 'where 0 < 0'), "less than evaluation on equal constants");
});

QUnit.test('<= : less than or equal', function(assert) {
	var evaluate = Where.newEvaluator({ cache : true });
	var record = { a : -1, b : 1 };

	assert.ok(evaluate(record, 'where a <= b'), "less than or equal evaluation on fields");
	assert.notOk(evaluate(record, 'where b <= a'), "less than or equal inverse evaluation on fields");

	assert.ok(evaluate(record, 'where a <= 0'), "less than or equal evaluation on field and constant");
	assert.notOk(evaluate(record, 'where 0 <= a'), "less than or equal inverse evaluation on field and constant");
	assert.ok(evaluate(record, 'where -1 <= a'), "less than or equal evaluation on equal field and constant");

	assert.ok(evaluate(record, 'where 0 <= b'), "less than or equal evaluation on constant and field");
	assert.notOk(evaluate(record, 'where b <= 0'), "less than or equal inverse evaluation on constant and field");
	assert.ok(evaluate(record, 'where b <= 1'), "less than or equal inverse evaluation on equal constant and field");

	assert.ok(evaluate(record, 'where -0.2 <= 0.1'), "less than or equal evaluation on constants");
	assert.notOk(evaluate(record, 'where 0.1 <= -0.2'), "less than or equal inverse evaluation on constants");
	assert.ok(evaluate(record, 'where 0 <= 0'), "less than or equal evaluation on equal constants");
});

QUnit.test('> : greater than', function(assert) {
	var evaluate = Where.newEvaluator({ cache : true });
	var record = { a : 1, b : -1 };

	assert.ok(evaluate(record, 'where a > b'), "greater than evaluation on fields");
	assert.notOk(evaluate(record, 'where b > a'), "greater than inverse evaluation on fields");

	assert.ok(evaluate(record, 'where a > 0'), "greater than evaluation on field and constant");
	assert.notOk(evaluate(record, 'where 0 > a'), "greater than inverse evaluation on field and constant");

	assert.ok(evaluate(record, 'where 0 > b'), "greater than evaluation on constant and field");
	assert.notOk(evaluate(record, 'where b > 0'), "greater than inverse evaluation on constant and field");

	assert.ok(evaluate(record, 'where 0.1 > -0.2'), "greater than evaluation on constants");
	assert.notOk(evaluate(record, 'where -0.2 > 0.1'), "greater than inverse evaluation on constants");
	assert.notOk(evaluate(record, 'where 0 > 0'), "greater than evaluation on equal constants");
});

QUnit.test('>= : greater than or equal', function(assert) {
	var evaluate = Where.newEvaluator({ cache : true });
	var record = { a : 1, b : -1 };

	assert.ok(evaluate(record, 'where a >= b'), "greater than or equal evaluation on fields");
	assert.notOk(evaluate(record, 'where b >= a'), "greater than or equal inverse evaluation on fields");

	assert.ok(evaluate(record, 'where a >= 0'), "greater than or equal evaluation on field and constant");
	assert.notOk(evaluate(record, 'where 0 >= a'), "greater than or equal inverse evaluation on field and constant");
	assert.ok(evaluate(record, 'where 1 >= a'), "greater than or equal evaluation on equal field and constant");

	assert.ok(evaluate(record, 'where 0 >= b'), "greater than or equal evaluation on constant and field");
	assert.notOk(evaluate(record, 'where b >= 0'), "greater than or equal inverse evaluation on constant and field");
	assert.ok(evaluate(record, 'where b >= -1'), "greater than or equal inverse evaluation on equal constant and field");

	assert.ok(evaluate(record, 'where 0.1 >= -0.2'), "greater than or equal evaluation on constants");
	assert.notOk(evaluate(record, 'where -0.2 >= 0.1'), "greater than or equal inverse evaluation on constants");
	assert.ok(evaluate(record, 'where 0 >= 0'), "greater than or equal evaluation on equal constants");
});

QUnit.test('in : in array', function(assert) {
	var evaluate = Where.newEvaluator({ cache : true });
	var record = { a : -1, b : 0, c : 1, d : "a string", e : true, f : false };

	assert.ok(evaluate(record, 'where a in [-1, 0, 1]'), "in array evaluation on field to first element in array");
	assert.ok(evaluate(record, 'where -1 in [-1, 0, 1]'), "in array evaluation on constant to first element in array");

	assert.ok(evaluate(record, 'where b in [-1, 0, 1]'), "in array evaluation on field to second element in array");
	assert.ok(evaluate(record, 'where 0 in [-1, 0, 1]'), "in array evaluation on constant to second element in array");
	
	assert.ok(evaluate(record, 'where b in [-1, 0, 1]'), "in array evaluation on field to last element in array");
	assert.ok(evaluate(record, 'where 1 in [-1, 0, 1]'), "in array evaluation on constant to last element in array");
	
	assert.notOk(evaluate(record, 'where d in [-1, 0, 1]'), "in array evaluation on field to non-existent element in array");
	assert.notOk(evaluate(record, 'where "a string" in [-1, 0, 1]'), "in array evaluation on constant to non-existent element in array");
	
	assert.ok(evaluate(record, 'where d in ["a string", true, false]'), "in array evaluation on string field to element in array");
	assert.ok(evaluate(record, 'where "a string" in ["a string", true, false]'), "in array evaluation on string constant to element in array");
	
	assert.ok(evaluate(record, 'where e in ["a string", true, false]'), "in array evaluation on true field to element in array");
	assert.ok(evaluate(record, 'where true in ["a string", true, false]'), "in array evaluation on true constant to element in array");
	
	assert.ok(evaluate(record, 'where f in ["a string", true, false]'), "in array evaluation on false field to element in array");
	assert.ok(evaluate(record, 'where false in ["a string", true, false]'), "in array evaluation on false constant to element in array");
});

QUnit.test('and : the and condition', function(assert) {
	var evaluate = Where.newEvaluator({ cache : true });

	var clause = 'where true and true';
	assert.ok(evaluate(null, clause), clause + " : evaluation");

	clause = 'where true and false';
	assert.notOk(evaluate(null, clause), clause + " : evaluation");

	clause = 'where false and true';
	assert.notOk(evaluate(null, clause), clause + " : evaluation");

	clause = 'where false and false';
	assert.notOk(evaluate(null, clause), clause + " : evaluation");
});

QUnit.test('or : the or condition', function(assert) {
	var evaluate = Where.newEvaluator({ cache : true });

	var clause = 'where true or true';
	assert.ok(evaluate(null, clause), clause + " : evaluation");

	clause = 'where true or false';
	assert.ok(evaluate(null, clause), clause + " : evaluation");

	clause = 'where false or true';
	assert.ok(evaluate(null, clause), clause + " : evaluation");

	clause = 'where false or false';
	assert.notOk(evaluate(null, clause), clause + " : evaluation");
});

QUnit.test('not : the not operator', function(assert) {
	var evaluate = Where.newEvaluator({ cache : true });

	var clause = 'where not true';
	assert.notOk(evaluate(null, clause), clause + " : evaluation");

	clause = 'where not false';
	assert.ok(evaluate(null, clause), clause + " : evaluation");
});

QUnit.test('precedence', function(assert) {
	var evaluate = Where.newEvaluator({ cache : true });

	var clause = 'where not(true or false) and true or true';
	assert.ok(evaluate(null, clause), clause + " : evaluation");

	clause = 'where not(true or false) and (true or true)';
	assert.notOk(evaluate(null, clause), clause + " : evaluation");

	clause = 'where not((true or false and (true or true))';
	assert.notOk(evaluate(null, clause), clause + " : evaluation");

	clause = 'where not not((true or false) and (true or true))';
	assert.ok(evaluate(null, clause), clause + " : evaluation");
});