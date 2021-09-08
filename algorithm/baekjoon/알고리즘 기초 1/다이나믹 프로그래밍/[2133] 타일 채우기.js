var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
var size = Number(inputs[0]);

var dp = new Array(size + 1).fill(0);
dp[0] = 1;
dp[2] = 3;
for (var i = 4; i <= size; i += 2) {
	var sub = 0;
	for (var m = i; m >= 0; m -= 2) {
		sub += dp[i - m];
	}
	dp[i] = dp[i - 2] + (sub * 2);
}
console.log(dp[size]);