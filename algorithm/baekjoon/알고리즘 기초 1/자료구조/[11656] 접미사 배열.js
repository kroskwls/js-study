var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString();

var outputs = [];
var size = inputs.length;
for (var i = 0; i < size; i++) {
	outputs.push(inputs.substring(i, size).trim());
}
console.log(outputs.sort().join('\n').trim());