var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
inputs.shift();
var calc = inputs.shift().split('');

var numbers = {};
for (var i in inputs) {
	var number = inputs[i];
	numbers[String.fromCharCode(65 + Number(i))] = Number(number);
}

var stack = [];
for (var ch of calc) {
	if (/[+\-*\/]/.test(ch)) {
		var b = stack.pop();
		var a = stack.pop();
		var r = 0;
		switch (ch) {
			case '+':
				r = a + b;
				break;
			case '-':
				r = a - b;
				break;
			case '*':
				r = a * b;
				break;
			case '/':
				r = a / b;
				break;
		}
		stack.push(r);
	} else {
		stack.push(numbers[ch]);
	}
}
console.log(stack.pop().toFixed(2));