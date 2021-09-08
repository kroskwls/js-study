var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
inputs.shift();

var outputs = '';
var deque = {
	data: [],
	push_front: (n) => deque.data.unshift(n),
	push_back: (n) => deque.data.push(n),
	pop_front: () => deque.size() === 0 ? -1 : deque.data.shift(),
	pop_back: () => deque.size() === 0 ? -1 : deque.data.pop(),
	size: () => deque.data.length,
	empty: () => deque.size() === 0 ? 1 : 0,
	front: () => deque.size() === 0 ? -1 : deque.data[0],
	back: () => deque.size() === 0 ? -1 : deque.data[deque.size() - 1],
};

for (var input of inputs) {
	if (input.length > 9) {
		var splited = input.split(' ');
		var cmd = splited[0];
		var data = splited[1];
		deque[cmd](data);
	} else
		outputs += deque[input]() + '\n';
}
console.log(outputs);