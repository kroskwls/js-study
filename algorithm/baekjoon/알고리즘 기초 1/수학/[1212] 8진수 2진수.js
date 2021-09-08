var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n')[0].split('');

var binary = [];
while (input.length > 0) {
	var num = input.pop();

	var _2pow2 = Math.floor(num / 4);
	num = num % 4;
	var _2pow1 = Math.floor(num / 2);
	num = num % 2;
	var _2pow0 = num;

	binary.push(_2pow0);
	binary.push(_2pow1);
	binary.push(_2pow2);
}
while (binary.length > 1 && binary[binary.length - 1] === 0) binary.pop();
console.log(binary.reverse().join(''));