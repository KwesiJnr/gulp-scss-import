var through = require('through2');
var gutil = require('gulp-util');
var path = require('path');

module.exports = function(outputFile){

  var output = '';

  //write the content of the outputFile
  var write = function (file, enc, cb){
    var importFile = file.base + file.path.replace( file.cwd + "\\" , ''); 
    
    //gutil.log("Imported file: "+ gutil.colors.cyan(importFile));

    if (importFile != "undefined"){
      output =  output + '@import "' + importFile + '"; \n';
    }
    
    cb();
  };

  var flush = function(cb){

    //create the new 'outputFile' with 'output' as content
    var newFile = new gutil.File({
      path: outputFile,
      contents: new Buffer(output)
    });

    //outputs the new file on gulp stream
    this.push(newFile);
    
    cb();
  };

  return through.obj(write, flush);
};