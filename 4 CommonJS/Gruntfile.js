"use strict";

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-mocha-istanbul');

    
    grunt.registerTask('lint', 'jshint');
    grunt.registerTask('bundle', 'browserify');
    grunt.registerTask('jswatch', 'watch');
    grunt.registerTask('test', 'qunit');
    grunt.registerTask('unittest', 'mochaTest');
    grunt.registerTask('coverage', ['mocha_istanbul:coverage']);
    grunt.registerTask('default', ['jshint', 'coverage', 'browserify', 'uglify', 'qunit', 'watch']);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            main: {
                src: 'src/main.js',
                dest: 'client/bundle.js'
            }
        },
        watch: {
            files: ['src/**/*.js','test/*.js'],
            tasks: ['default']
        },
        jshint: {
            files: ['src/**/*.js','test/*.js','Gruntfile.js'],
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                strict: true,
                node: true,
                globals: {
                    jQuery: true,
                    require: true,
                    describe: true,
                    it:true
                },
            },
        },
        qunit: {
            browser:['test/qunit/index.html']
        },
        mochaTest: {
            options: {
                reporter: 'spec'//dot,spec,nyan,TAP,Landing,List,progress,JSON,JSON Stream,HTML,min
            },
            test: {
                src:['test/*.js']
            }
        },
        uglify: {
            build: {
                src: 'client/bundle.js',
                dest: 'client/bundle.min.js'
            }
        },
        mocha_istanbul: {
            coverage: {
                src: 'test',
                options: {
                    mask: '*.test.js'
                }
            }
        }
    });
};