var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
inputs = inputs.filter(s => s !== "").map(s => s.split(' ').map(n => Number(n)));

var dp = new Array(inputs.length).fill([0, 0, 0]);
for (var i = 1; i < inputs.length; i++) {
	dp[i] = [
		Math.min(dp[i - 1][1], dp[i - 1][2]) + inputs[i][0],
		Math.min(dp[i - 1][0], dp[i - 1][2]) + inputs[i][1],
		Math.min(dp[i - 1][0], dp[i - 1][1]) + inputs[i][2],
	];
}
console.log(Math.min(...dp[dp.length - 1]));