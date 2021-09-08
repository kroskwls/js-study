var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
var size = Number(inputs[0]);
inputs = inputs[1].split(' ').map(n => Number(n));

var dp = [1];
for (var i = 1; i < size; i++) {
	var max = 0;
	for (var m = 0; m < i; m++) {
		if (inputs[m] > inputs[i] && dp[m] > max)
			max = dp[m];
	}
	dp[i] = max + 1;
}
console.log(Math.max(...dp));