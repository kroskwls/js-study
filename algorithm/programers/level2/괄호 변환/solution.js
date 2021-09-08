function solution(p) {
	if (p === '') return '';

	var bracketCnt = 0;
	var splitIdx = 0;
	var arrW = p.split('');
	for (var i in arrW) {
		var b = arrW[i];
		if (b === '(') bracketCnt++;
		else bracketCnt--;

		if (bracketCnt === 0) {
			splitIdx = Number(i) + 1;
			break;
		}
	}
	var u = p.substring(0, splitIdx);
	var v = p.substring(splitIdx, p.length);

	var answer = '';
	if (checkRightBracket(u)) {
		answer = u + solution(v);
	} else {
		answer = '(' + solution(v) + ')';
		var arrU = u.substring(1, u.length - 1).split('');
		for (var b of arrU) {
			answer += b === '(' ? ')' : '(';
		}
	}

	return answer;
}

function checkRightBracket(w) {
	var openCnt = 0;
	var arrW = w.split('');
	for (var b of arrW) {
		if (b === '(') openCnt++;
		else openCnt--;

		if (openCnt < 0) return false;
	}

	return openCnt === 0;
}