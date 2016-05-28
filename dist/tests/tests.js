var module;
'use strict';

module.exports = function (test, Where) {

	test('= : equals', function (t) {
		var evaluate = Where.newEvaluator({ cache: true });
		var record = { a: 1, b: 1, c: -1, d: null };

		t.ok(evaluate(record, 'where a = b'), "equals evaluation on fields");
		t.notOk(evaluate(record, 'where a = c'), "equals evaluation on unequal fields");

		t.ok(evaluate(record, 'where a = 1'), "equals evaluation on field and constant");
		t.notOk(evaluate(record, 'where a = -2'), "equals evaluation on unequal field and constant");

		t.ok(evaluate(record, 'where -1 = c'), "equals evaluation on constant and field");
		t.notOk(evaluate(record, 'where 2 = c'), "equals evaluation on unequal constant and field");

		t.ok(evaluate(record, 'where 0.1 = 0.1'), "equals evaluation on constants");
		t.notOk(evaluate(record, 'where 0.1 = -0.2'), "equals evaluation on unequal constants");

		t.ok(evaluate(record, 'where d = d'), "equals evaluation on null field with itself");
		t.notOk(evaluate(record, 'where d = c'), "equals evaluation on null and non-null fields");

		t.ok(evaluate(record, 'where null = null'), "equals evaluation on null constants");
		t.notOk(evaluate(record, 'where null = 1'), "equals evaluation on null and non-null constants");

		t.ok(evaluate(record, 'where d = null'), "equals evaluation on null field and constant");
		t.ok(evaluate(record, 'where null = d'), "equals inverse evaluation on null field and constant");

		t.notOk(evaluate(record, 'where c = null'), "equals evaluation on non-null field and null constant");
		t.notOk(evaluate(record, 'where null = c'), "equals inverse evaluation on non-null field and null constant");
		if (typeof t.end === 'function') t.end();
	});

	test('!= : not equals', function (t) {
		var evaluate = Where.newEvaluator({ cache: true });
		var record = { a: -1, b: 1, c: -1, d: null };

		t.ok(evaluate(record, 'where a != b'), "not equals evaluation on fields");
		t.notOk(evaluate(record, 'where a != c'), "not equals evaluation on equal fields");

		t.ok(evaluate(record, 'where a != 1'), "not equals evaluation on field and constant");
		t.notOk(evaluate(record, 'where a != -1'), "not equals evaluation on equal field and constant");

		t.ok(evaluate(record, 'where 1 != c'), "not equals evaluation on constant and field");
		t.notOk(evaluate(record, 'where -1 != c'), "not equals evaluation on equal constant and field");

		t.ok(evaluate(record, 'where 0.1 != -0.2'), "not equals evaluation on constants");
		t.notOk(evaluate(record, 'where 0.1 != 0.1'), "not equals evaluation on equal constants");

		t.notOk(evaluate(record, 'where d != d'), "not equals evaluation on null field with itself");
		t.ok(evaluate(record, 'where d != c'), "not equals evaluation on null and non-null fields");

		t.notOk(evaluate(record, 'where null != null'), "not equals evaluation on null constants");
		t.ok(evaluate(record, 'where null != 1'), "not equals evaluation on null and non-null constants");

		t.notOk(evaluate(record, 'where d != null'), "not equals evaluation on null field and constant");
		t.notOk(evaluate(record, 'where null != d'), "not equals inverse evaluation on null field and constant");

		t.ok(evaluate(record, 'where c != null'), "not equals evaluation on non-null field and null constant");
		t.ok(evaluate(record, 'where null != c'), "not equals inverse evaluation on non-null field and null constant");
		if (typeof t.end === 'function') t.end();
	});

	test('< : less than', function (t) {
		var evaluate = Where.newEvaluator({ cache: true });
		var record = { a: -1, b: 1 };

		t.ok(evaluate(record, 'where a < b'), "less than evaluation on fields");
		t.notOk(evaluate(record, 'where b < a'), "less than inverse evaluation on fields");

		t.ok(evaluate(record, 'where a < 0'), "less than evaluation on field and constant");
		t.notOk(evaluate(record, 'where 0 < a'), "less than inverse evaluation on field and constant");

		t.ok(evaluate(record, 'where 0 < b'), "less than evaluation on constant and field");
		t.notOk(evaluate(record, 'where b < 0'), "less than inverse evaluation on constant and field");

		t.ok(evaluate(record, 'where -0.2 < 0.1'), "less than evaluation on constants");
		t.notOk(evaluate(record, 'where 0.1 < -0.2'), "less than inverse evaluation on constants");
		t.notOk(evaluate(record, 'where 0 < 0'), "less than evaluation on equal constants");
		if (typeof t.end === 'function') t.end();
	});

	test('<= : less than or equal', function (t) {
		var evaluate = Where.newEvaluator({ cache: true });
		var record = { a: -1, b: 1 };

		t.ok(evaluate(record, 'where a <= b'), "less than or equal evaluation on fields");
		t.notOk(evaluate(record, 'where b <= a'), "less than or equal inverse evaluation on fields");

		t.ok(evaluate(record, 'where a <= 0'), "less than or equal evaluation on field and constant");
		t.notOk(evaluate(record, 'where 0 <= a'), "less than or equal inverse evaluation on field and constant");
		t.ok(evaluate(record, 'where -1 <= a'), "less than or equal evaluation on equal field and constant");

		t.ok(evaluate(record, 'where 0 <= b'), "less than or equal evaluation on constant and field");
		t.notOk(evaluate(record, 'where b <= 0'), "less than or equal inverse evaluation on constant and field");
		t.ok(evaluate(record, 'where b <= 1'), "less than or equal inverse evaluation on equal constant and field");

		t.ok(evaluate(record, 'where -0.2 <= 0.1'), "less than or equal evaluation on constants");
		t.notOk(evaluate(record, 'where 0.1 <= -0.2'), "less than or equal inverse evaluation on constants");
		t.ok(evaluate(record, 'where 0 <= 0'), "less than or equal evaluation on equal constants");
		if (typeof t.end === 'function') t.end();
	});

	test('> : greater than', function (t) {
		var evaluate = Where.newEvaluator({ cache: true });
		var record = { a: 1, b: -1 };

		t.ok(evaluate(record, 'where a > b'), "greater than evaluation on fields");
		t.notOk(evaluate(record, 'where b > a'), "greater than inverse evaluation on fields");

		t.ok(evaluate(record, 'where a > 0'), "greater than evaluation on field and constant");
		t.notOk(evaluate(record, 'where 0 > a'), "greater than inverse evaluation on field and constant");

		t.ok(evaluate(record, 'where 0 > b'), "greater than evaluation on constant and field");
		t.notOk(evaluate(record, 'where b > 0'), "greater than inverse evaluation on constant and field");

		t.ok(evaluate(record, 'where 0.1 > -0.2'), "greater than evaluation on constants");
		t.notOk(evaluate(record, 'where -0.2 > 0.1'), "greater than inverse evaluation on constants");
		t.notOk(evaluate(record, 'where 0 > 0'), "greater than evaluation on equal constants");
		if (typeof t.end === 'function') t.end();
	});

	test('>= : greater than or equal', function (t) {
		var evaluate = Where.newEvaluator({ cache: true });
		var record = { a: 1, b: -1 };

		t.ok(evaluate(record, 'where a >= b'), "greater than or equal evaluation on fields");
		t.notOk(evaluate(record, 'where b >= a'), "greater than or equal inverse evaluation on fields");

		t.ok(evaluate(record, 'where a >= 0'), "greater than or equal evaluation on field and constant");
		t.notOk(evaluate(record, 'where 0 >= a'), "greater than or equal inverse evaluation on field and constant");
		t.ok(evaluate(record, 'where 1 >= a'), "greater than or equal evaluation on equal field and constant");

		t.ok(evaluate(record, 'where 0 >= b'), "greater than or equal evaluation on constant and field");
		t.notOk(evaluate(record, 'where b >= 0'), "greater than or equal inverse evaluation on constant and field");
		t.ok(evaluate(record, 'where b >= -1'), "greater than or equal inverse evaluation on equal constant and field");

		t.ok(evaluate(record, 'where 0.1 >= -0.2'), "greater than or equal evaluation on constants");
		t.notOk(evaluate(record, 'where -0.2 >= 0.1'), "greater than or equal inverse evaluation on constants");
		t.ok(evaluate(record, 'where 0 >= 0'), "greater than or equal evaluation on equal constants");
		if (typeof t.end === 'function') t.end();
	});

	test('in : in array', function (t) {
		var evaluate = Where.newEvaluator({ cache: true });
		var record = { a: -1, b: 0, c: 1, d: "a string", e: true, f: false };

		t.ok(evaluate(record, 'where a in [-1, 0, 1]'), "in array evaluation on field to first element in array");
		t.ok(evaluate(record, 'where -1 in [-1, 0, 1]'), "in array evaluation on constant to first element in array");

		t.ok(evaluate(record, 'where b in [-1, 0, 1]'), "in array evaluation on field to second element in array");
		t.ok(evaluate(record, 'where 0 in [-1, 0, 1]'), "in array evaluation on constant to second element in array");

		t.ok(evaluate(record, 'where b in [-1, 0, 1]'), "in array evaluation on field to last element in array");
		t.ok(evaluate(record, 'where 1 in [-1, 0, 1]'), "in array evaluation on constant to last element in array");

		t.notOk(evaluate(record, 'where d in [-1, 0, 1]'), "in array evaluation on field to non-existent element in array");
		t.notOk(evaluate(record, 'where "a string" in [-1, 0, 1]'), "in array evaluation on constant to non-existent element in array");

		t.ok(evaluate(record, 'where d in ["a string", true, false]'), "in array evaluation on string field to element in array");
		t.ok(evaluate(record, 'where "a string" in ["a string", true, false]'), "in array evaluation on string constant to element in array");

		t.ok(evaluate(record, 'where e in ["a string", true, false]'), "in array evaluation on true field to element in array");
		t.ok(evaluate(record, 'where true in ["a string", true, false]'), "in array evaluation on true constant to element in array");

		t.ok(evaluate(record, 'where f in ["a string", true, false]'), "in array evaluation on false field to element in array");
		t.ok(evaluate(record, 'where false in ["a string", true, false]'), "in array evaluation on false constant to element in array");
		if (typeof t.end === 'function') t.end();
	});

	test('and : the and condition', function (t) {
		var evaluate = Where.newEvaluator({ cache: true });

		var clause = 'where true and true';
		t.ok(evaluate(null, clause), clause + " : evaluation");

		clause = 'where true and false';
		t.notOk(evaluate(null, clause), clause + " : evaluation");

		clause = 'where false and true';
		t.notOk(evaluate(null, clause), clause + " : evaluation");

		clause = 'where false and false';
		t.notOk(evaluate(null, clause), clause + " : evaluation");
		if (typeof t.end === 'function') t.end();
	});

	test('or : the or condition', function (t) {
		var evaluate = Where.newEvaluator({ cache: true });

		var clause = 'where true or true';
		t.ok(evaluate(null, clause), clause + " : evaluation");

		clause = 'where true or false';
		t.ok(evaluate(null, clause), clause + " : evaluation");

		clause = 'where false or true';
		t.ok(evaluate(null, clause), clause + " : evaluation");

		clause = 'where false or false';
		t.notOk(evaluate(null, clause), clause + " : evaluation");
		if (typeof t.end === 'function') t.end();
	});

	test('not : the not operator', function (t) {
		var evaluate = Where.newEvaluator({ cache: true });

		var clause = 'where not true';
		t.notOk(evaluate(null, clause), clause + " : evaluation");

		clause = 'where not false';
		t.ok(evaluate(null, clause), clause + " : evaluation");
		if (typeof t.end === 'function') t.end();
	});

	test('precedence', function (t) {
		var evaluate = Where.newEvaluator({ cache: true });

		var clause = 'where not(true or false) and true or true';
		t.ok(evaluate(null, clause), clause + " : evaluation");

		clause = 'where not ( true or false ) and ( true or true )';
		t.notOk(evaluate(null, clause), clause + " : evaluation");

		clause = 'where not((true or false) and (true or true))';
		t.notOk(evaluate(null, clause), clause + " : evaluation");

		clause = 'where not not((true or false) and (true or true))';
		t.ok(evaluate(null, clause), clause + " : evaluation");
		if (typeof t.end === 'function') t.end();
	});
};
module.exports(QUnit.test, Where);
