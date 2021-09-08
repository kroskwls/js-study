var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
inputs.shift();
console.log(inputs.map(input => input.split(' ').map(str => str.split('').reverse().join('')).join(' ')).reduce((a, v) => a + v + '\n',''));
