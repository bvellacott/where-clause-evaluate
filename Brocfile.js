var browserify = require('broccoli-browserify');
var uglify = require('broccoli-uglify-sourcemap')
var esTranspiler = require('broccoli-babel-transpiler')//require('broccoli-es6-concatenator');//require('broccoli-es6modules');
var pickFiles = require('broccoli-funnel')
var mergeTrees = require('broccoli-merge-trees')
var concat = require('broccoli-concat');
var env = require('broccoli-env').getEnv()
var rename = require('broccoli-stew').rename;

// Tests
var testsStatic = pickFiles('./dev/tests', {
  include: ['tests.html', 'tests-min.html', 'lib/*', 'css/*'],
  destDir: './tests'
});

var tests = pickFiles('./dev/tests', {
  include: ['tests.js', 'tests.html', 'tests-min.html'],
  destDir: './tests'
});

tests = esTranspiler(tests);

tests = concat(tests, {
  // header: "var module;",
  outputFile: './tests/tests.js',
  inputFiles: ['./tests/tests.js'],
  // footer: "module.exports(QUnit.test, Where);",
  sourceMapConfig: { enabled: false },
});

// Library
const antlr4 = pickFiles('node_modules/antlr4', {
   destDir: './antlr4'
});

var tool = pickFiles('./dev', {
  include: ['where-eval.js', 'browserEntry.js', 'where/*'],
  destDir: './dev'
});

tool = esTranspiler(new mergeTrees([tool, antlr4], { overwrite: true }));

tool = browserify(tool, {
  entries: ['./dev/browserEntry.js'],
  debug: true
});

tool = concat(tool, {
  outputFile: '/where-eval.js',
  inputFiles: ['*.js'],
  sourceMapConfig: { enabled: true },
});

tool = pickFiles(tool, {
  include: ['where-eval.js', 'where-eval.map'],
});

var toolMin = rename(tool, 'where-eval.js', 'where-eval-min.js');

toolMin = uglify(toolMin, {
   mangle: true,
   compress: true
});

var all = mergeTrees([
  toolMin,
  tool,
  tests,
  testsStatic
]);

module.exports = all;
