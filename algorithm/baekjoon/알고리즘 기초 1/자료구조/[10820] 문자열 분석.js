var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');

var outputs = '';
for (var k = 0; k < inputs.length; k++) {
	var input = inputs[k];
	if (input === '') continue;
	var answer = [0, 0, 0, 0];
	for (var i = 0; i < input.length; i++) {
		var ch = input[i];
		if (/[a-z]/.test(ch)) {
			answer[0]++;
		} else if (/[A-Z]/.test(ch)) {
			answer[1]++;
		} else if (/[0-9]/.test(ch)) {
			answer[2]++;
		} else if (/[ ]/.test(ch)) {
			answer[3]++;
		}
	}
	outputs += answer.join(' ').trim() + '\n';
}
console.log(outputs);