function solution(absolutes, signs) {
	return absolutes.reduce((a, v, i) => a + (signs[i] ? v : -v), 0);
}