var fs = require('fs');

var dirpath = process.argv[2];
var ext = process.argv[3];

fs.readdir(dirpath, function(err, data) {
  var foundFiles = data.filter(function (filepath) {

    if (filepath.indexOf('.') === -1) {
      return false;
    }

    var splitPath = filepath.split('.');
    var fileExt = splitPath[splitPath.length - 1];
    if (fileExt === ext) {
      return true;
    }
    return false;
  });

  foundFiles.forEach(function (filepath) {
    console.log(filepath);
  })
});
