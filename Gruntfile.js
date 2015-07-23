module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-aws-lambda');

  grunt.initConfig({
    lambda_invoke: {
      default: {
        options: {
        }
      }
    },
    lambda_package: {
      default: {
        options: {
        }
      }
    },
    lambda_deploy: {
      default: {
        arn: 'arn:aws:lambda:eu-west-1:367845992893:function:microServicesDemo',
        options: {
          region: 'eu-west-1'
        }
      }
    },
  });

  grunt.registerTask('deploy', ['lambda_package', 'lambda_deploy']);
};
