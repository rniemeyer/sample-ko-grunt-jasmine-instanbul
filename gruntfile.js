module.exports = function(grunt) {

    grunt.initConfig({
        jasmine: {
            coverage: {
                src: ['src/*.js'],
                options: {
                    specs: ['spec/*.js'],
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: 'coverage/coverage.json',
                        report: 'coverage'
                    },
                    vendor: ['ext/*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default', ['jasmine']);
};
