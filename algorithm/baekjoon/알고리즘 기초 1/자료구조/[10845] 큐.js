var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
inputs.shift();

var outputs = '';
var queue = {
	data: [],
	push: (n) => queue.data.push(n),
	pop: () => queue.size() === 0 ? -1 : queue.data.shift(),
	size: () => queue.data.length,
	empty: () => queue.size() === 0 ? 1 : 0,
	front: () => queue.size() === 0 ? -1 : queue.data[0],
	back: () => queue.size() === 0 ? -1 : queue.data[queue.size() - 1]
};

for (var input of inputs) {
	if (input.length > 5)
		queue.push(input.split(' ')[1]);
	else
		outputs += queue[input]() + '\n';
}
console.log(outputs);