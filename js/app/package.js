/**
 * Created by tony on 16/12/2015.
 */


var isTestRe = /.test/;


var profile = (function () {
  return {
    resourceTags: {
      amd: function (filename, mid) {
        return /\.js$/.test(filename);
      },
      test: function(filename, mid){
        return isTestRe.test(filename);
      }
    }
  };
})();
