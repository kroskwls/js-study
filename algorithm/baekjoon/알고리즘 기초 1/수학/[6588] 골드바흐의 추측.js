var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
inputs = inputs.map(n => Number(n));
var max = Math.max(...inputs);

var isPrime = new Array(max + 1).fill(true);
isPrime[0] = isPrime[1] = false;
for (var i = 2; i < max / 2; i++) {
	if (isPrime[i])
		for (var n = i + i; n < max; n += i) {
			isPrime[n] = false;
		}
}
var primes = {};
for (var i = 0; i < isPrime.length; i++) {
	if (isPrime[i]) primes[i] = true;
}
var isPrime = [];

var result = [];
for (var n of inputs) {
	if (n === 0) continue;

	for (var p in primes) {
		if (primes[p] && primes[n - p]) {
			result.push([n, p, n - p]);
			break;
		}
	}
}

for (var arr of result) {
	console.log(arr[0] + ' = ' + arr[1] + ' + ' + arr[2]);
}