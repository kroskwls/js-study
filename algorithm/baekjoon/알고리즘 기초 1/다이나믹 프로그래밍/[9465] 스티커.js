var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
var testCase = Number(inputs[0]);
var inputCases = [];
for (var i = 0; i < testCase * 3; i += 3) {
	inputCases.push({
		n: Number(inputs[i + 1]),
		data: [
			[0, ...inputs[i + 2].split(' ').map(n => Number(n))],
			[0, ...inputs[i + 3].split(' ').map(n => Number(n))]
		]
	});
}

for (var input of inputCases) {
	var n = input.n;
	var data = input.data;
	var dp = [[0, 0, 0]];
	for (var i = 1; i <= n; i++) {
		dp[i] = [
			Math.max(dp[i - 1][1], dp[i - 1][2]),
			Math.max(dp[i - 1][0], dp[i - 1][2]) + data[0][i],
			Math.max(dp[i - 1][0], dp[i - 1][1]) + data[1][i]
		];
	}
	console.log(Math.max(...dp[n]));
}