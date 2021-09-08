var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
var target = Number(inputs[0]);
var price = inputs[1].split(' ').map(n => Number(n))
price.unshift(0);

var dp = [0];
for (var i = 1; i <= target; i++) {
	var arr = [];
	for (var n = 1; n <= i; n++) {
		arr.push((dp[i - n] ?? 0) + price[n]);
	}
	dp[i] = Math.min(...arr);
}
console.log(dp[target]);