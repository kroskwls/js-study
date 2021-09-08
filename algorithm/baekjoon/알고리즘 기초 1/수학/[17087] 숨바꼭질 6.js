var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var seek = Number(inputs[0].split(' ')[1]);
var distances = inputs[1].split(' ').map(p => Number(p)).map(d => Math.abs(seek - d));
function getGcd(a, b) {
	return !b ? a : getGcd(b, a % b);
}

var gcd = 0;
for (var n of distances) {
	if (gcd === 0) {
		gcd = n;
	} else {
		gcd = getGcd(gcd, n);
	}
}
console.log(gcd);