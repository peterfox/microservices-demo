module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-aws-lambda');

  grunt.initConfig({
      lambda_invoke: {
          default: {
              options: {
              }
          }
      },
  });
};