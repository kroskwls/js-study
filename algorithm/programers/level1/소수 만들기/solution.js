function solution(nums) {
	var answer = 0;

	for (var f = 0; f < nums.length - 2; f++) {
		for (var s = f + 1; s < nums.length - 1; s++) {
			for (var t = s + 1; t < nums.length; t++) {
				if (isPrime(nums[f] + nums[s] + nums[t]))
					answer++;
			}
		}
	}

	return answer;
}

function isPrime(number) {
	var result = true;

	for (var i = 2; i <= Math.sqrt(number); i++) {
		if (number % i === 0) {
			result = false;
			break;
		}
	}

	return result;
}