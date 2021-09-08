function solution(dartResult) {
	var scoreBoard = [];
	var bonus = { S: 1, D: 2, T: 3 };
	var round;

	var arr = dartResult.replace(/10/g, 'A').split('');
	for (var i in arr) {
		var dart = arr[i];
		if (/[0-9|A]/.test(dart)) {
			scoreBoard.push(parseInt(dart, 11));
			round = scoreBoard.length - 1;
		} else if (/[S|D|T]/.test(dart)) {
			scoreBoard[round] = scoreBoard[round] ** bonus[dart];
		} else if (dart === '*') {
			scoreBoard[round - 1] *= 2;
			scoreBoard[round] *= 2;
		} else if (dart === '#') {
			scoreBoard[round] = -scoreBoard[round];
		}
	}

	return scoreBoard.reduce((a, v) => a + v);
}