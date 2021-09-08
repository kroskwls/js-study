var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n')[0];
input = Number(input);

var outputs = [];
var divisor = 2;
while (input !== 1) {
	if (input % divisor === 0) {
		input /= divisor;
		outputs.push(divisor);
	} else {
		divisor++;
	}
}
console.log(outputs.join('\n'));