function solution(d, budget) {
	d.sort((a, b) => a - b);
	var cnt = 0, acc = 0;
	for (var i in d) {
		if ((acc += d[i]) <= budget) cnt++;
		else break;
	}

	return cnt;
}