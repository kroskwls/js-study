function solution(iBoard, moves) {
	var result = 0;
	var basket = [];
	var board = iBoard.map((b, i) => iBoard.filter(l => l[i] !== 0).map(e => e[i]));

	moves.forEach(m => {
		var idx = m - 1;
		var doll = board[idx][0];
		if (doll) {
			if (basket[basket.length - 1] === doll) {
				result++;
				basket.splice(basket.length - 1, 1);
			} else {
				basket.push(doll);
			}
			board[idx].splice(0, 1);
		}
	});

	return result * 2;
}