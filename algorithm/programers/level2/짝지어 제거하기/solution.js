function solution(s) {
	if (s.length % 2 != 0) return 0;

	var stack = [];
	var arr = s.split('');
	var size = arr.length;
	for (var i = 0; i < size; i++) {
		var pop = arr[i];
		if (stack[stack.length - 1] === pop) {
			stack.pop();
		} else {
			stack.push(pop);
		}
	}

	return stack.length > 0 ? 0 : 1;
}