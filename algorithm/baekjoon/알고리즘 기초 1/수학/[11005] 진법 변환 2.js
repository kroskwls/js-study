var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split(' ');
var num = Number(inputs[0]);
var base = Number(inputs[1]);

var output = [];
while (num !== 0) {
	var remainder = num % base;
	if (9 < remainder && remainder < 36) {
		remainder = String.fromCharCode(remainder + 55);
	}
	output.push(remainder);

	num = Math.floor(num / base);
}
console.log(output.reverse().join(''));