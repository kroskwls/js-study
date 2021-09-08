var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
var size = Number(inputs[0]);
inputs = inputs[1].split(' ').map(n => Number(n));

var dp = [];
for (var i = 0; i < size; i++) {
	var ascDp = i > 0 ? [1] : [0];
	for (var k = 1; k <= i; k++) {
		var max = 0;
		for (var e = 0; e < k; e++) {
			if (inputs[e] < inputs[k] && ascDp[e] > max) max = ascDp[e];
		}
		ascDp[k] = max + 1;
	}

	var descDp = new Array(i).fill(0);
	descDp[i] = i < size ? 1 : 0;
	for (var k = i; k < size; k++) {
		var max = 0;
		for (var e = i; e < k; e++) {
			if (inputs[e] > inputs[k] && descDp[e] > max) max = descDp[e];
		}
		descDp[k] = max + 1;
	}
	var ascMax = Math.max(...ascDp);
	var descMax = Math.max(...descDp);
	dp[i] = ascMax + descMax - ((ascMax !== 0 && descMax !== 0) ? 1 : 0);
}
console.log(Math.max(...dp));