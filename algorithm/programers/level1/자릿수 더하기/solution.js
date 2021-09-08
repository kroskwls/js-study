function solution(n) {
	return String(n).split('').reduce((a, v) => a + Number(v), 0);
}