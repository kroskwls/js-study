var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
var size = Number(inputs[0]);

var dp = inputs[1].split(' ').map(n => Number(n));
for (var i = 1; i < size; i++) {
	if (dp[i - 1] > 0 && dp[i] + dp[i - 1] > 0)
		dp[i] += dp[i - 1];
}
console.log(Math.max(...dp));