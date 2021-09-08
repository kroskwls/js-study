var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n')[0].split('');

var octal = [];
while (input.length > 0) {
	var _2pow0 = input.pop();
	var _2pow1 = input.pop();
	var _2pow2 = input.pop();

	_2pow0 = _2pow0 ? Math.pow(2, 0) * Number(_2pow0) : 0;
	_2pow1 = _2pow1 ? Math.pow(2, 1) * Number(_2pow1) : 0;
	_2pow2 = _2pow2 ? Math.pow(2, 2) * Number(_2pow2) : 0;

	octal.push(_2pow0 + _2pow1 + _2pow2);
}
console.log(octal.reverse().join(''))