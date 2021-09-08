var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
inputs = inputs[1].split(' ').map(n => Number(n));

var cnt = 0;
for (var n of inputs) {
	if (n > 1) {
		var flag = true;
		var size = Math.sqrt(n);
		for (var i = 2; i <= size; i++) {
			if (n % i === 0) flag = false;
		}
		if (flag) cnt++;
	}
}
console.log(cnt);