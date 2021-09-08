var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n').filter(s => s !== "").map(s => s.split(' ').map(n => Number(n)));
var size = inputs.shift()[0];

var dp = [];
for (var i = 0; i < size; i++) {
	dp[i] = [];
	for (var m = 0; m <= i; m++) {
		var left = ((dp[i - 1] ?? [])[m - 1] ?? 0) + inputs[i][m];
		var right = ((dp[i - 1] ?? [])[m] ?? 0) + inputs[i][m];
		dp[i][m] = Math.max(left, right);
	}
}
console.log(Math.max(...dp[size - 1]));