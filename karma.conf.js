// Karma configuration
// Generated on Thu Jun 04 2015 12:51:36 GMT+0300 (FLE Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'app/scripts/vendors/angular.js',
      'app/scripts/vendors/angular-mocks.js',
      'app/scripts/vendors/angular-route.js',
      'app/scripts/modules/home/home.js',
      'app/scripts/modules/movie/movie.js',
      'app/scripts/modules/movies/movies.js',
      'app/scripts/modules/news/news.js',
      'app/scripts/app.js',
      'app/scripts/directives/footer/footerDirective.js',
      'app/scripts/directives/header/headerDirective.js',
      'app/scripts/directives/search/searchDirective.js',
      'app/scripts/services/databaseFactory.js',
      'app/scripts/services/services.js',
      'tests/unit/home.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/scripts/modules/home/home.js': ['coverage'],
      'app/scripts/modules/movie/movie.js': ['coverage'],
      'app/scripts/modules/movies/movies.js': ['coverage'],
      'app/scripts/modules/news/news.js': ['coverage'],
      'app/scripts/app.js': ['coverage'],
      'app/scripts/directives/footer/footerDirective.js': ['coverage'],
      'app/scripts/directives/header/headerDirective.js': ['coverage'],
      'app/scripts/directives/search/searchDirective.js': ['coverage'],
      'app/scripts/services/databaseFactory.js': ['coverage'],
      'app/scripts/services/services.js': ['coverage']
     
    },

    coverageReporter: {
      type:'text'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
