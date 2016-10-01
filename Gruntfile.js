module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            dist: {
                src: ['js/main.js'],
                dest: 'js/main.build.js',
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: {
                    'js/main.build.min.js': ['js/main.build.js']
                }
            }
        },
        less: {
            production:{
                options: {
                    //paths: ['src/less'],
                    cleancss: true,
                    compress: true
                },
                files: {
                    "css/style.min.css": "less/styles.less"
                }
            }
        },
        watch: {
            all:{
                files: ['<%= concat.dist.src %>', 'less/styles.less'],
                tasks: ['less', 'concat', 'uglify']
            },
            less:{
                files: ['less/styles.less'],
                tasks: ['less']
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('default', ['less', 'concat', 'uglify']);

};
