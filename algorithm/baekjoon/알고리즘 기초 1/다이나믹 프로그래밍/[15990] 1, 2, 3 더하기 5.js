var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n').map(n => Number(n)).filter(n => n !== 0);
inputs.shift();

var max = Math.max(...inputs);
var dp = [[0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 1]];
for (var i = 4; i <= max; i++) {
	var obj = [0, 0, 0];
	obj[0] = (dp[i - 1][1] + dp[i - 1][2]) % 1000000009;
	obj[1] = (dp[i - 2][0] + dp[i - 2][2]) % 1000000009;
	obj[2] = (dp[i - 3][0] + dp[i - 3][1]) % 1000000009;
	dp[i] = obj;
}

for (var num of inputs) {
	console.log(dp[num].reduce((a, v) => a + v, 0) % 1000000009);
}