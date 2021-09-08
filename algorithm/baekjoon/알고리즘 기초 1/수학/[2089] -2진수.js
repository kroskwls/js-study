var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n')[0];
var num = Number(input);

var pow = 0;
var nBinary = [];
while (num !== 0) {
	pow++;
	var divisor = Math.pow(-2, pow);
	var quotient = Math.ceil(num / divisor);
	var remainder = num - quotient * divisor;
	nBinary.push(remainder / Math.pow(-2, pow - 1));
	num = num - remainder;
}
console.log(nBinary.length === 0 ? 0 : nBinary.reverse().join(''));
