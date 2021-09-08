var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n')[0];
input = Number(input);

var dp = [[0n, 0n], [0n, 1n]];
for (var i = 2; i <= input; i++) {
	dp[i] = [dp[i - 1][0] + dp[i - 1][1], dp[i - 1][0]];
}
console.log(dp[input].reduce((a, v) => a + v, 0n).toString());