function solution(s) {
	var answer = [];
	var arr = s.substring(2, s.length - 2).split('},{');
	arr.sort((a, b) => a.length - b.length);
	arr = arr.map(s => s.split(',').map(n => Number(n)));

	for (var sub of arr) {
		var num = sub[0];
		answer.push(num);
		arr = arr.map(s => (s.splice(s.indexOf(num), 1), s));
	}

	return answer;
}