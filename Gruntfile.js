/**
 * Created by fourq on 9/2/15.
 */
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    nodeDir: 'node_modules',

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
            flatten: true,
            src: [
              '<%= nodeDir %>/angular/angular.min.js',
              '<%= nodeDir %>/angular-ui-router/release/angular-ui-router.min.js',
              '<%= nodeDir %>/bootstrap/dist/js/bootstrap.min.js'
            ],
            dest: 'src/vendor/'
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