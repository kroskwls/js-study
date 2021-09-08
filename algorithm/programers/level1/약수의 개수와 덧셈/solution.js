function solution(left, right) {
	var acc = 0;

	for (var i = left; i < right + 1; i++) {
		var sign = getDivisorCount(i) % 2 === 0 ? 1 : -1;
		acc += i * sign;
	}

	return acc;
}

function getDivisorCount(n) {
	var cnt = 0;

	for (var i = 0; i < Math.sqrt(n); i++) {
		if (n % i === 0) cnt++;
	}
	cnt *= 2;
	if (n % Math.sqrt(n) === 0) cnt++;

	return cnt;
}