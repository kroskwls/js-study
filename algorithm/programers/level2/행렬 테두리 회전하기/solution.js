function solution(rows, columns, queries) {
	var answer = [];

	var grid = [];
	for (var row = 1; row < rows * columns; row += columns) {
		grid.push(Array.from({ length: columns }, (v, i) => i + row));
	}

	for (var query of queries) {
		var sx = query[0] - 1;
		var sy = query[1] - 1;
		var ex = query[2] - 1;
		var ey = query[3] - 1;
		var movedNumber = new Set();
		var move = 99999;
		for (var col = sy; col < ey; col++) {
			movedNumber.add(grid[sx][col]);
			[move, grid[sx][col]] = [grid[sx][col], move];
		}
		for (var row = sx; row < ex; row++) {
			movedNumber.add(grid[row][ey]);
			[move, grid[row][ey]] = [grid[row][ey], move];
		}
		for (var col = ey; col > sy; col--) {
			movedNumber.add(grid[ex][col]);
			[move, grid[ex][col]] = [grid[ex][col], move];
		}
		for (var row = ex; row >= sx; row--) {
			movedNumber.add(grid[row][sy]);
			[move, grid[row][sy]] = [grid[row][sy], move];
		}
		answer.push(Math.min(...movedNumber));
	}

	return answer;
}