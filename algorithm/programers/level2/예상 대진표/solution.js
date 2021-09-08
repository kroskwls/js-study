function solution(n, a, b, s = 1) {
	var answer;

	var table1 = Array.from({ length: n / 2 }, (v, i) => i + s);
	var table2 = Array.from({ length: n / 2 }, (v, i) => i + s + n / 2);
	if (table1.includes(a) && table1.includes(b)) {
		answer = solution(n / 2, a, b, s);
	} else if (table2.includes(a) && table2.includes(b)) {
		answer = solution(n / 2, a, b, n / 2 + s);
	} else {
		var binary = n.toString(2);
		answer = binary.length - binary.split('').indexOf('1') - 1;
	}

	return answer;
}