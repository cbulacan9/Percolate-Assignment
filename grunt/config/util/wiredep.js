// Configuration for Wiredep task(s)
// Injects Bower packages into your source code.
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('wiredep', {
    app: {
      options: {
        ignorePath: /client\/|\.\.\//g,
        // Make sure everything has an absolute path (starts with '/')
        fileTypes: {
          html: {
            replace: {
              js: '<script src="/{{filePath}}"></script>',
              css: '<link rel="stylesheet" href="/{{filePath}}" />'
            }
          }
        },
        // packages to ignore
        exclude: [
          'bower_components/html5shiv/',
          'bower_components/consolelog/',
          'bower_components/modernizr/',
        ],
        overrides: {
          'handlebars': {
            'main': 'handlebars.runtime.js'
          }
        }
      },
      src: [
        '<%= yeogurt.client %>/index.html'
      ]
    },
    styles: {
      src: ['<%= yeogurt.client %>/styles/**/*.less'],
      ignorePath: /client/g,
    }
  });

};

module.exports = taskConfig;
