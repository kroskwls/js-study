var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = Number(inputs[0]);
var b = Number(inputs[1]);

function f_gcd(a, b) {
	return !b ? a : f_gcd(b, a % b);
}
var gcd = f_gcd(a, b);
console.log(gcd);
console.log(a * b / gcd);