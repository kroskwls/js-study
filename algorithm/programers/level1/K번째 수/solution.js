function solution(array, commands) {
	return commands.map(c => array.filter((n, i) => (c[0] - 2) < i && i < c[1]).sort((a, b) => a - b)[c[2] - 1]);
}