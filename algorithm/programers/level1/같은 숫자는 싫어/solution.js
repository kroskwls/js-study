function solution(arr) {
	var result = [];
	arr.forEach((n, i) => n !== arr[i + 1] ? result.push(n) : 0);
	return result;
}