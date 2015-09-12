basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'test/lib/angular/angular.js',
  'test/lib/angular-mocks/angular-mocks.js',
  'angular-knowtify.js',
  'test/unit/**/*.js'
];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
