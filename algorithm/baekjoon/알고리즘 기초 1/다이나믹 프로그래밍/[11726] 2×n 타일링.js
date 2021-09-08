var fs = require('fs');
var input = Number(fs.readFileSync('/dev/stdin').toString().split('\n')[0]);

var arr = [1, 1, 2];
for (var i = 2; i < input; i++) {
	[arr[0], arr[1], arr[2]] = [arr[1], arr[2], (arr[1] + arr[2]) % 10007];
}

console.log(input < 3 ? arr[input] : arr[2]);