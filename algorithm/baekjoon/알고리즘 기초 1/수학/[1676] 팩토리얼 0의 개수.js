var fs = require('fs');
var inputs = Number(fs.readFileSync('/dev/stdin').toString().trim());
console.log(Math.floor(inputs / 5) + Math.floor(inputs / 25) + Math.floor(inputs / 125));