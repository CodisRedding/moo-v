/**
 * Created by fourq on 9/2/15.
 */
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    nodeDir: 'node_modules',
    venDir: 'src/vendor',
    bowerDir: 'bower_components',

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
            cwd: '<%= nodeDir %>/angular-ui-router/build/',
            src: [
              'angular-ui-router.min.js'
            ],
            dest: '<%= venDir %>/angular-ui-router/js'
          },
          {
            expand: true,
            cwd: '<%= nodeDir %>/angular-gridster/dist',
            src: [
              '**/*'
            ],
            dest: '<%= venDir %>/angular-gridster'
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
          },
          {
            expand: true,
            cwd: '<%= nodeDir %>/underscore/',
            src: [
              'underscore-min.js',
              'underscore-min.map'
            ],
            dest: '<%= venDir %>/underscore/js'
          },
          {
            expand: true,
            cwd: '<%= bowerDir %>/angular-deckgrid/',
            src: [
              'angular-deckgrid.js'
            ],
            dest: '<%= venDir %>/angular-deckgrid/js'
          },
          {
            expand: true,
            cwd: '<%= bowerDir %>/angular-input-stars-directive/',
            src: [
              'angular-input-stars.js',
              'angular-input-stars.css'
            ],
            dest: '<%= venDir %>/angular-input-stars-directive'
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