module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: '<json:package.json>',
        watch: {
            karma: {
                files: ['angular-knowtify.js', 'test/unit/*.js'],
                tasks: ['karma:unitBackground:run'] //NOTE the :run flag
            }
        },
        karma: {
            options: {
                configFile: 'config/karma.conf.js',
                browsers: ['Chrome']
            },

            unit: {
                singleRun: true
            },

            unitBackground: {
                background: true
            }
        },
        uglify: {
            build: {
                files: {
                    'build/angular-knowtify.min.js': [
                        'angular-knowtify.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-karma');

    // Default task.
    grunt.registerTask('default', ['uglify']);
};