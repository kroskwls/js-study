function solution(lottos, win_nums) {
	var rank = lottos.filter(p => win_nums.filter(n => n === p).length === 1).length;
	var joker = lottos.filter(n => n === 0).length;

	var best = 7 - (joker + rank);
	best = best === 7 ? 6 : best
	var worst = 7 - rank;
	worst = worst === 7 ? 6 : worst

	return [best, worst];
}