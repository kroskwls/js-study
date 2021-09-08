var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().trim();
console.log(inputs.length);