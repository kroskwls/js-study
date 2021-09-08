var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n')[0];
input = Number(input);

var dp = [];
dp[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
for (var i = 2; i <= input; i++) {
	var data = new Array(10).fill(0);
	for (var k in dp[i - 1]) {
		k = Number(k);
		if (k === 0) {
			data[k + 1] += (dp[i - 1][k]) % 1000000000;
		} else if (k === 9) {
			data[k - 1] += (dp[i - 1][k]) % 1000000000;
		} else {
			data[k - 1] += (dp[i - 1][k]) % 1000000000;
			data[k + 1] += (dp[i - 1][k]) % 1000000000;
		}
	}
	dp[i] = data;
}
console.log(dp[input].reduce((a, v) => a + v, 0) % 1000000000);
