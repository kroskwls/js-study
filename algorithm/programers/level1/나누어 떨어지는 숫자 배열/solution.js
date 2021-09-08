function solution(arr, divisor) {
	var result = arr.filter(n => n % divisor === 0);
	return result.length === 0 ? [-1] : result.sort((a, b) => a - b);
}