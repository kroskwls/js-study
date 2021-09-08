var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
inputs.shift();

function f_gcd(a, b) {
	return !b ? a : f_gcd(b, a % b);
}

var outputs = '';
for (var input of inputs) {
	if (input === '') continue;
	input = input.split(' ');
	var a = Number(input[0]);
	var b = Number(input[1]);
	var gcd = f_gcd(a, b);
	outputs += (a * b / gcd) + '\n';
}
console.log(outputs.trim())