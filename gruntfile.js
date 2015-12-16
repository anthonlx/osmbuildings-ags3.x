module.exports = function (grunt)
{
  // Build customizations would be left up to developer to implement.
  grunt.loadNpmTasks('grunt-dojo');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.initConfig({
                     clean: {
                       build       : {
                         src: ['dist/']
                       },
                       uncompressed: {
                         src: [
                           'dist/**/*.uncompressed.js'
                         ]
                       }
                     },
                     copy : {
                       main: {
                         files: [{
                           expand: true,
                           cwd   : 'src/',
                           src   : ['built.html'],
                           dest  : './dist/',
                           rename: function (dest, src)
                           {
                             return dest + 'index.html';
                           }
                         }]
                       }
                     },
                     dojo : {
                       dist   : {
                         options: {
                           releaseDir: '../dist',
                         }
                       },
                       options: {
                         profile : 'build.profile.js',
                         dojo    : 'src/dojo/dojo.js',
                         load    : 'build',
                         cwd     : './',
                         basePath: './src'
                       }
                     },

                     browserSync: {
                       bsFiles: {
                         src: ['css/*.css', './*.html', 'js/app/*.js']
                       },
                       options: {
                         server: {
                           baseDir: "./"
                         }
                       }
                     }
                   });

  grunt.registerTask('build', ['clean:build', 'dojo', 'copy', 'clean:uncompressed']);
  grunt.registerTask('serve', ['browserSync']);
};