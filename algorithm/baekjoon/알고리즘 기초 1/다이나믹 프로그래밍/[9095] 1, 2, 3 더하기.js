var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n').map(n => Number(n));
inputs.shift();

var max = Math.max(...inputs);
var dp = [0, 1, 2, 4];
for (var i = 4; i <= max; i++) {
	dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for (var number of inputs) {
	if (number) console.log(dp[number]);
}