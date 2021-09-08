function solution(n) {
	var result = [];
	while (n > 0) {
		var r = n % 3;
		n = parseInt(n / 3);
		if (r === 0) {
			r = 4;
			n--;
		}
		result.push(r);
	}
	return result.reverse().join("");
}