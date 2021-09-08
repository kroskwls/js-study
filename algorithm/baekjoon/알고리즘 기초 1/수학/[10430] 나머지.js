var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split(' ');
var A = Number(inputs[0]);
var B = Number(inputs[1]);
var C = Number(inputs[2]);

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);