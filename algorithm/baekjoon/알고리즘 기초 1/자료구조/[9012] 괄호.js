var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
inputs.shift();

var outputs = '';
inputs = inputs.map(input => input.split(''));
for (var input of inputs) {
    var cnt = 0;
    if (input.length === 0) continue;
    if (input.length % 2 === 1) cnt--;
    else {
        for (var p of input) {
            if (p === '(') cnt++;
            else cnt--;
            
            if (cnt < 0) break;
        }
    }
    if (cnt === 0) outputs += 'YES\n';
    else outputs += 'NO\n';
}
console.log(outputs);