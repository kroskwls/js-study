function solution(n) {
	if (n === 0) return 0;

	var divisors = [];
	for (var i = 1; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			divisors.push(i);
			if (i !== n / i) divisors.push(n / i);
		}
	}
	return divisors.reduce((a, v) => a + v);
}