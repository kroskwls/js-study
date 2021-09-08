var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split(' ');
console.log(Number(inputs[0] + inputs[1]) + Number(inputs[2] + inputs[3]));