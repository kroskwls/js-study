function solution(x) {
	return Number.isInteger(x / String(x).split('').reduce((a, v) => a + Number(v), 0));
}