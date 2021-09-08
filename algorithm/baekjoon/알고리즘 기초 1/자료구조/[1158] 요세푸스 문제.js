var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split(' ');
var n = Number(inputs[0]);
var k = Number(inputs[1]);
var arr = Array.from({ length: n }, (v, i) => i + 1);
var output = [];
while (arr.length) {
	for (var i = 0; i < k; i++) {
		arr.push(arr.shift());
	}
	output.push(arr.pop());
}
console.log('<' + output.join(', ') + '>')