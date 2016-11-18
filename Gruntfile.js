module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {

          options: {
            livereload: true
          },

          html: {
            files: ['index.html']
          },

          sass: {
            options: {
              livereload: false,
              spawn: false
            },
            files: ['scss/*.scss'],
            tasks: ['sass', 'postcss']
          },

          css: {
            files: ['css/min/main.min.css'],
          }
        },

        postcss: {
            options: {
         
                processors: [
                    require('pixrem')(), // add fallbacks for rem units 
                    require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes 
                    require('cssnano')() // minify the result 
                ]
            },
            dist: {
              src: 'css/main.css',
              dest: 'css/min/main.min.css'
            }
        },

        sass: {
            options: {
                sourceMap: true
            },
            destist: {
                files: {
                    'css/main.css': 'scss/main.scss'
                }
            }
        }

    });

    grunt.registerTask('default', []);

};