var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
inputs.shift();
inputs = inputs.map(n => Number(n)).filter(n => n !== 0);

var max = Math.max(...inputs);
var dp = [1, 1, 2];
for (var i = 3; i <= max; i++) {
	dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000009;
}

for (var n of inputs)
	console.log(dp[n]);
