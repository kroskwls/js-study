var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
var size = Number(inputs[0]);

var dp = new Array(size + 1).fill([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
for (var i = 2; i <= size; i++) {
	dp[i] = new Array(10);
	for (var k = 0; k < 10; k++) {
		var sum = 0;
		for (var m = 0; m <= k; m++) {
			sum += dp[i - 1][m];
		}
		dp[i][k] = sum % 10007;
	}
}
console.log(dp[size].reduce((a, v) => a + v) % 10007);