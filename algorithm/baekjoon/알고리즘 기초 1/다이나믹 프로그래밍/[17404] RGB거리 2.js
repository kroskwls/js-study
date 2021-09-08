var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n').filter(s => s !== "");
var size = Number(inputs.shift());
inputs = inputs.map(s => s.split(' ').map(n => Number(n)));
var last = [...inputs[size - 1]];

var min = Infinity;
var rgb = [inputs[0][0], inputs[0][1], inputs[0][2]];
for (var i = 0; i < 3; i++) {
	// 첫 집 처리
	inputs[0] = [Infinity, Infinity, Infinity];
	inputs[0][i] = rgb[i];
	// 마지막 집 처리
	inputs[size - 1] = [...last];
	inputs[size - 1][i] = Infinity;

	var dp = [inputs[0]];
	for (var k = 1; k < size; k++) {
		dp[k] = [
			inputs[k][0] + Math.min(dp[k - 1][1], dp[k - 1][2]),
			inputs[k][1] + Math.min(dp[k - 1][0], dp[k - 1][2]),
			inputs[k][2] + Math.min(dp[k - 1][0], dp[k - 1][1])
		];
	}
	var dpMin = Math.min(...dp[size - 1]);
	if (dpMin < min) min = dpMin;
}
console.log(min);