function solution(s) {
	if (s.length % 2 === 0) {
		// 짝수인 경우
		return s.substr((s.length / 2) - 1, 2);
	} else {
		// 홀수인 경우
		return s.charAt((s.length - 1) / 2);
	}
}