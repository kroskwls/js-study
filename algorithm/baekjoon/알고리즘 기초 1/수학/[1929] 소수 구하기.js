var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split(' ');
inputs = inputs.map(n => Number(n));

var outputs = '';
for (var n = inputs[0]; n <= inputs[1]; n++) {
	if (n > 1) {
		var flag = true;
		var size = Math.sqrt(n);
		for (var i = 2; i <= size; i++) {
			if (n % i === 0) flag = false;
		}
		if (flag) outputs += n + '\n';
	}
}
console.log(outputs.trim());