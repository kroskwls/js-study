var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
var size = Number(inputs[0]);

var dp = new Array(size + 1).fill([1, 1, 1]);
for (var i = 2; i <= size; i++) {
	dp[i] = [
		(dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % 9901,
		(dp[i - 1][0] + dp[i - 1][2]) % 9901,
		(dp[i - 1][0] + dp[i - 1][1]) % 9901
	];
}
console.log(dp[size].reduce((a, v) => a + v, 0) % 9901);