var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
inputs.shift();
inputs = inputs.map(input => input.split(' ').map(n => Number(n)));

function getGcd(a, b) {
	return !b ? a : getGcd(b, a % b);
}

var outputs = [];
for (var input of inputs) {
	input.shift();

	var sum = 0;
	var size = input.length;
	for (var i = 0; i < size - 1; i++) {
		for (var m = i + 1; m < size; m++) {
			sum += getGcd(input[i], input[m]);
		}
	}
	outputs.push(sum);
}

console.log(outputs.join('\n'));