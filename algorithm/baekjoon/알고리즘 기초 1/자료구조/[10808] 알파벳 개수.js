var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().trim().split('');
var alphabet = Array.from({ length: 26 }, (v, i) => 0);

for (var ch of inputs) {
	alphabet[ch.charCodeAt() - 97]++;
}

console.log(alphabet.join(' ').trim());