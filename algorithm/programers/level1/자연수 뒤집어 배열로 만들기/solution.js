function solution(n) {
	return String(n).split('').reverse().map(s => Number(s));
}