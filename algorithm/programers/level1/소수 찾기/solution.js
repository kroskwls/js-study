function solution(n) {
	var primes = Array.from({ length: ++n }, v => true);
	primes[0] = primes[1] = false;

	for (var i = 2; i < n + 1; i++) {
		if (!primes[i]) continue;
		for (var m = i + i; m < n + 1; m += i) {
			primes[m] = false;
		}
	}
	return primes.filter(n => n).length;
}