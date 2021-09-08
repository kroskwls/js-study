var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().trim().split('');

var outputs = '';
var stack = [];
var size = inputs.length + 1;
var isOpen = false;
for (var i = 0; i < size; i++) {
	var ch = inputs[i];
	if (ch === '<') {
		isOpen = true;
		if (stack.length > 0) {
			outputs += stack.reverse().join('');
			stack = [];
		}
	}
	stack.push(ch);

	if (ch === '>') {
		outputs += stack.join('');
		stack = [];
		isOpen = false;
	} else if (!isOpen && (ch === ' ' || !ch)) {
		outputs += stack.reverse().join('').trim() + (ch ? ch : '');
		stack = [];
	}
}
console.log(outputs);