function solution(s) {
	if (!isNaN(s)) return Number(s);

	var obj = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 };
	for (var key in obj) {
		s = s.replace(new RegExp(key, "g"), obj[key]);
	}
	return Number(s);
}