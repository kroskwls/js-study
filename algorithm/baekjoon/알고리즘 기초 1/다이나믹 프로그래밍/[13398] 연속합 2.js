var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
var size = Number(inputs[0]);
inputs = inputs[1].split(' ').map(n => Number(n));

var dp = [inputs[0]];
var rdp = [inputs[0]];
var max = inputs[0];
for (var i = 1; i < size; i++) {
	// 현재 값을 더한 값과 현재부터 다시 시작하는 값을 비교
	dp[i] = Math.max(dp[i - 1] + inputs[i], inputs[i]);
	// 이전 삭제를 유지하는 값과 현재값을 삭제하는 값을 비교
	rdp[i] = Math.max(rdp[i - 1] + inputs[i], dp[i - 1]);
	max = Math.max(dp[i], rdp[i], max);
}
console.log(max);