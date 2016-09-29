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
                       },
                       deploy: {
                         src: [
                           //Remove compiled librairies
                           'dist/js/dgrid/', 'dist/js/dojo/*', '!dist/js/dojo/dojo.*', '!dist/js/dojo/nls/**', '!dist/js/dojo/resources/**', '!dist/js/dojo/LICENSE',
                           'dist/js/dijit/*', '!dist/js/dijit/themes/nihilo/**',
                           'dist/js/dojox/', 'dist/js/dstore/', 'dist/js/put-selector/', 'dist/js/xstyle/', 'dist/js/moment/',
                           //Clean so
                           'dist/js/app', 'dist/js/osmb-so'
                           //TODO
                           /*,
                           //Clean other compilation things
                            'dist/js/esri/*', '!dist/js/esri/css/**', '!dist/js/esri/dijit/**', '!dist/js/esri/dijit/images/**', '!dist/js/esri/images/**', '!dist/js/esri/layers/VectorTileLayerImpl.js', '!dist/js/esri/layers/vectorTiles/core/workers/**'
                            */
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