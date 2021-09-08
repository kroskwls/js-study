function solution(numbers) {
	var result = new Set();

	for (var i = 0; i < numbers.length - 1; i++) {
		for (var k = i + 1; k < numbers.length; k++) {
			result.add(numbers[i] + numbers[k]);
		}
	}

	return [...result].sort((a, b) => a - b);
}