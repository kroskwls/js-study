var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().trim().split('');

var stack = {
	data: [],
	push: (n) => stack.data.push(n),
	top: () => stack.data[stack.data.length - 1],
	size: () => stack.data.length,
	pop: () => stack.data.pop()
};
var answer = 0;
var size = inputs.length;
for (var i = 0; i < size; i++) {
	var s = inputs[i];
	if (s === '(' && inputs[i + 1] === ')') {
		answer += stack.size();
		i++;
	} else if (s === ')') {
		answer++;
		stack.pop();
	} else {
		stack.push(s);
	}
}
console.log(answer);