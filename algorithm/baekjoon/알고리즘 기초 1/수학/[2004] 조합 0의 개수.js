var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
var n = Number(inputs[0]);
var r = Number(inputs[1]);

var arr = [n, r, n - r];
var cnts2 = [];
var cnts5 = [];
for (var k of arr) {
	var nCnt = 0;
	for (var i = 5; i < 2000000000; i *= 5) {
		var cnt = Math.floor(k / i);
		if (cnt === 0) break;
		else nCnt += cnt;
	}
	cnts5.push(nCnt);

	nCnt = 0;
	for (var i = 2; i < 2000000000; i *= 2) {
		var cnt = Math.floor(k / i);
		if (cnt === 0) break;
		else {
			nCnt += cnt;
		}
	}
	cnts2.push(nCnt);
}
var numOf2 = cnts2[0] - cnts2[1] - cnts2[2];
var numOf5 = cnts5[0] - cnts5[1] - cnts5[2];
console.log(Math.min(numOf2, numOf5));