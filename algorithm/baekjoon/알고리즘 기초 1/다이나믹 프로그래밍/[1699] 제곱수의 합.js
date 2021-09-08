var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
var target = Number(inputs[0]);

var dp = [0];
for (var i = 1; i <= target; i++) {
	var min;
	if (Number.isInteger(Math.sqrt(i)))
		min = 1;
	else {
		min = Infinity;
		for (var k = 1; k < i; k++) {
			var num = dp[k] + dp[i - k];
			if (min > num) min = num;
		}
	}
	dp[i] = min;
}
console.log(dp[target])