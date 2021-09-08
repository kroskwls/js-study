var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n').map(n => Number(n));
var size = inputs.shift();
var max = Math.max(...inputs);

var primes = new Array(max + 1).fill(true);
primes[0] = primes[1] = false;
for (var i = 2; i <= max / 2; i++) {
	if (primes[i]) {
		for (var m = i + i; m <= max; m += i) {
			primes[m] = false;
		}
	}
}

var outputs = [];
for (var i = 0; i < size; i++) {
	var num = Number(inputs[i]);
	var cnt = 0;
	for (var k = 0; k <= num / 2; k++) {
		if (primes[k] && primes[num - k]) {
			cnt++;
		}
	}
	outputs.push(cnt);
}
console.log(outputs.join('\n'));