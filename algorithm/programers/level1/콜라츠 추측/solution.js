function solution(num, cnt = 0) {
	if (num === 1) return cnt;

	if (cnt === 500) {
		return -1;
	} else if (num % 2 === 0) {
		num /= 2;
	} else {
		num = num * 3 + 1;
	}

	return solution(num, ++cnt);
}