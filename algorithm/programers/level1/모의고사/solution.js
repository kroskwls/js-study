function solution(answers) {
	var result = [];
	var mathIdiots = [
		[1, 2, 3, 4, 5],
		[2, 1, 2, 3, 2, 4, 2, 5],
		[3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
	];
	var answerSheet = [];

	for (var i in mathIdiots) {
		var idiotAnswer = mathIdiots[i];
		var answerCount = 0;
		for (var k in answers) {
			if (answers[k] === idiotAnswer[k % idiotAnswer.length]) {
				answerCount++;
			}
		}
		answerSheet.push(answerCount);
	}

	var highestScore = Math.max(...answerSheet);
	answerSheet.forEach((score, idx) => {
		if (score == highestScore) {
			result.push(idx + 1);
		}
	});

	return result;
}