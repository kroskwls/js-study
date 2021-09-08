function solution(arr) {
	return arr.reduce((a, v) => a + v, 0) / arr.length;
}