function solution(a, b) {
	if (a > b) [a, b] = [b, a];
	return Array.from({ length: b - a + 1 }, (v, i) => i + a).reduce((a, v) => a + v);
}