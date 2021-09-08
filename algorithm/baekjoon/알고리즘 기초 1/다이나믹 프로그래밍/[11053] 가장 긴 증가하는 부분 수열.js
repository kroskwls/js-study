var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
var numbers = Number(inputs[0]);
inputs = inputs[1].split(' ').map(n => Number(n));

var dp = new Array(numbers).fill(0);
for (var i = 0; i < numbers; i++) {
	var size = 0;
	for (var m = 0; m <= i; m++) {
		if (inputs[m] < inputs[i] && dp[m] > size) {
			size = dp[m];
		}
	}
	dp[i] = size + 1;
}
console.log(Math.max(...dp));