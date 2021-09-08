var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('');

var prec = { '*': 2, '/': 2, '+': 1, '-': 1 };
var stack = [];
var output = '';
for (var i = 0; i < inputs.length; i++) {
	var ch = inputs[i];
	if (/[A-Z]/.test(ch)) {
		output += ch;
	} else if (ch === ')') {
		while (stack[stack.length - 1] !== '(') {
			output += stack.pop();
		}
		stack.pop();
	} else if (/[(+\-*\/]/.test(ch)) {
		while (stack.length > 0 && prec[stack[stack.length - 1]] >= prec[ch]) {
			output += stack.pop();
		}
		stack.push(ch);
	}
}
while (stack[stack.length - 1] !== undefined) {
	output += stack.pop();

}
console.log(output);