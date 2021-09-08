var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
var numbers = Number(inputs[0]);
inputs = inputs[1].split(' ').map(n => Number(n));

var idx = 0;
var arr = [];
var dp = new Array(numbers).fill(0);
for (var i = 0; i < numbers; i++) {
	var max = 0;
	var subIdx = -1;
	for (var m = 0; m < i; m++) {
		if (inputs[m] < inputs[i] && dp[m] > max) {
			max = dp[m];
			subIdx = m;
		}
	}
	arr.push([...(arr[subIdx] ?? []), inputs[i]]);
	dp[i] = max + 1;

	if (dp[i] > dp[idx]) idx = i;
}
console.log(Math.max(...dp));
console.log(arr[idx].join(' '));