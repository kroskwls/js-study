function solution(a, b) {
	return a.reduce((a, v, i) => a + (v * b[i]), 0);
}