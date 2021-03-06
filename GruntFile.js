module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    readme: {
      options: {
        comment: 'docs/item.hogan',
        readme: 'docs/wrapper.hogan'
      },
      dist: {
        src: [
          'lib/index.js'
        ],
        dest: 'README.md'
      }
    },

    uglify: {
      build: {
        src: 'lib/index.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-buster');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-readme');

  // Default task.
  grunt.registerTask('default', ['uglify', 'readme']);
};
