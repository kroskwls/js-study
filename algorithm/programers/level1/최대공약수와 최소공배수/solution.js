function solution(n, m) {
	var gcd = getGcd(n, m);
	var lcm = Math.abs(n * m) / gcd;
	return [gcd, lcm];
}

function getGcd(a, b) {
	console.log(a, b, !b, a % b);
	return !b ? a : getGcd(b, a % b);
}