// finds all (markdown) exercise definition files and parse them into an array

// TODO: rename to ExerciseEnumerator.js

var fs = require('fs');
var _ = require('lodash');
var ExerciseParser = require('./ExerciseParser');

var RE_TEMPLATE_FILE = /ex\.(\d+)\.(code|quizz)\.template\.md/;

function makeRegexTester(regex) {
  return regex.test.bind(regex);
}

exports.parseAllFrom = function(sourcePath) {
  var files = fs.readdirSync(sourcePath).sort();
  var exercises = [];

  files.filter(makeRegexTester(RE_TEMPLATE_FILE)).forEach(function(file){
    var fileParts = RE_TEMPLATE_FILE.exec(file);
    var exNumber = fileParts[1];
    var exType = fileParts[2];
    console.log('Parsing', file, '...');
    var exData = new ExerciseParser().readFromFile(sourcePath + file);
    exercises.push(_.extend({
      i: exNumber,
      _type: exType,
      _info: 'generated from ' + file,
    }, exData));
  });

  return exercises;
};
