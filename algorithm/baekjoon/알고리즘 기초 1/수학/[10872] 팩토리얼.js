var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().trim();
console.log(Array.from({ length: Number(inputs) }, (v, i) => i + 1).reduce((a, v) => a * v, 1));