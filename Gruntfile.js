/**
 * Created by fourq on 9/2/15.
 */
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    nodeDir: 'node_modules',

    venDir: 'src/vendor',

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    copy: {
      vendor: {
        files: [
          {
            expand: true,
            cwd: '<%= nodeDir %>/angular/',
            src: [
              'angular.min.js',
              'angular.min.js.map'
            ],
            dest: '<%= venDir %>/angular/js'
          },
          {
            expand: true,
            cwd: '<%= nodeDir %>/angular-ui-router/bower_components/',
            src: [
              'angular-ui-router.min.js',
              'angular-ui-router.min.map'
            ],
            dest: '<%= venDir %>/angular/js'
          },
          {
            expand: true,
            cwd: '<%= nodeDir %>/bootstrap/dist/',
            src: [
              'js/bootstrap.min.js',
              'css/**/*',
              'fonts/**/*'
            ],
            dest: '<%= venDir %>/bootstrap'
          },
          {
            expand: true,
            cwd: '<%= nodeDir %>/jquery/dist/',
            src: [
              '**/*'
            ],
            dest: '<%= venDir %>/jquery/js'
          },
          {
            expand: true,
            cwd: '<%= nodeDir %>/font-awesome/',
            src: [
              'css/**/*',
              'fonts/**/*'
            ],
            dest: '<%= venDir %>/font-awesome'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('test', ['karma']);
  grunt.registerTask('update-vendor', ['copy']);
};