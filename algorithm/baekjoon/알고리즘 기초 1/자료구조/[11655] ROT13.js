var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString();

var outputs = '';
var size = inputs.length;
for (var i = 0; i < size; i++) {
	var ch = inputs[i];
	if (/[a-z]/.test(ch)) {
		ch = ch.charCodeAt() + 13;
		ch = ch > 122 ? ch - 26 : ch;
	} else if (/[A-Z]/.test(ch)) {
		ch = ch.charCodeAt() + 13;
		ch = ch > 90 ? ch - 26 : ch;
	} else {
		ch = ch.charCodeAt();
	}
	outputs += String.fromCharCode(ch);
}
console.log(outputs);