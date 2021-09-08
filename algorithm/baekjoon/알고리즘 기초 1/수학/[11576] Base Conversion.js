var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
var fromBase = Number(inputs[0].split(' ')[0]);
var toBase = Number(inputs[0].split(' ')[1]);
var numbers = inputs[2].split(' ').reverse();

var base10 = 0;
for (var i = 0; i < numbers.length; i++) {
	var n = Number(numbers[i]);
	base10 += fromBase ** i * n;
}

var output = [];
while (base10 !== 0) {
	output.push(base10 % toBase);
	base10 = Math.floor(base10 / toBase);
}
console.log(output.reverse().join(' '));