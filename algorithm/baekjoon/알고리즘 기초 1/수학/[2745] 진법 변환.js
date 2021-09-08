var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split(' ');
var num = inputs[0].split('').reverse();
var base = Number(inputs[1]);

var output = 0;
for (var i = 0; i < num.length; i++) {
	var n = num[i];
	if (/[0-9]/.test(n)) {
		output += (base ** i * Number(n));
	} else {
		output += (base ** i * (n.charCodeAt() - 55));
	}
}
console.log(output);