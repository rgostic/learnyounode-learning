var fs = require('fs');

var filepath = process.argv[2];

var fileContents = fs.readFileSync(filepath).toString();
var numNewLines = fileContents.split('\n').length - 1;
console.log(numNewLines);