function solution(numbers, target) {
	var cnt = 0;
	search(numbers[0], 0);
	search(-numbers[0], 0);

	function search(sum, idx) {
		if (idx === numbers.length - 1) {
			if (sum === target) cnt++;
		} else {
			idx++;
			search(sum + numbers[idx], idx);
			search(sum - numbers[idx], idx);
		}
	}

	return cnt;
}