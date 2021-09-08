var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n')[0];
var target = Number(inputs.split(' ')[0]);
var size = Number(inputs.split(' ')[1]);

var dp = [[], new Array(target + 1).fill(1), Array.from({ length: target + 1 }, (v, i) => i + 1)];
for (var i = 3; i <= size; i++) { // i = size 별 dp, i 자리를 사용해서 k라는 숫자를 만들떄 m이라는 숫자를 사용함
	if (!dp[i]) dp[i] = [];
	for (var k = 0; k <= target; k++) { // k = 만들 숫자(0 ~ N)
		dp[i][k] = 0;
		for (var m = 0; m <= k; m++) { // k를 만들기 위한 준비물(ex> k = 3일때 m = 0 ~ 3)
			dp[i][k] = (dp[i][k] + dp[i - 1][k - m]) % 1000000000;
		}
	}
}
console.log(dp[size][target]);