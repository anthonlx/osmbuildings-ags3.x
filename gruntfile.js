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

                         cwd : './',
                         src   : './build.html',
                         dest  : './dist/index.html'

                       },
                       osmbuild:{
                         expand:true,
                         cwd : './js/osmbuildings-smartorigin/dist/',
                         src:'OSMBuildings-ExternalInterface.js',
                         dest  : './dist/js/osmb-so/'
                       }
                     },
                     dojo : {
                       dist   : {
                         options: {
                           releaseDir: '../dist/js'
                         }
                       },
                       options: {
                         profile : 'build.profile.js',
                         dojo    : 'js/dojo/dojo.js',
                         load    : 'build',
                         cwd     : './',
                         basePath: './js'
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

  grunt.registerTask('build', ['clean:build', 'dojo', 'copy', 'copy:osmbuild', 'clean:uncompressed']);
  grunt.registerTask('serve', ['browserSync']);
};