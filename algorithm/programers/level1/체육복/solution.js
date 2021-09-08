function solution(n, lost, reserve) {
	var result = n - lost.length;

	lost.sort((a, b) => a - b);
	// 도난당한 학생이 여벌이 있는 경우
	for (var i = lost.length - 1; i >= 0; i--) {
		if (reserve.includes(lost[i])) {
			result++;
			reserve.splice(reserve.indexOf(lost[i]), 1);
			lost.splice(i, 1);
		}
	}

	// 다른 학생에게 빌려야 하는 경우
	for (var i in lost) {
		var lStudent = lost[i];

		var idx = -1;
		if (reserve.includes(lStudent - 1)) {
			idx = reserve.indexOf(lStudent - 1);
		} else if (reserve.includes(lStudent + 1)) {
			idx = reserve.indexOf(lStudent + 1);
		}

		if (idx !== -1) {
			result++;
			reserve.splice(idx, 1);
		}
	}

	return result;
}