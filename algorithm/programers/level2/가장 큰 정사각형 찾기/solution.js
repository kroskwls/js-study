function solution(board) {
	var rSize = board.length;
	var cSize = board[0].length;
	for (var r = 1; r < rSize; r++) {
		for (var c = 1; c < cSize; c++) {
			if (board[r][c])
				board[r][c] = Math.min(board[r][c - 1], board[r - 1][c], board[r - 1][c - 1]) + 1;
		}
	}

	return board.reduce((a, v) => Math.max(a, ...v), 0) ** 2;
}