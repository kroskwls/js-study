var fs = require('fs');
var input = Number(fs.readFileSync('/dev/stdin').toString().split('\n')[0]);

var max = 9999999;
var dp = [0, 0, 1, 1];
for (var i = 4; i <= input; i++) {
	var div3 = (dp[i / 3] ?? max) + 1;
	var div2 = (dp[i / 2] ?? max) + 1;
	var min1 = dp[i - 1] + 1;

	dp[i] = Math.min(div3, div2, min1);
}
console.log(dp[input]);