var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
var left = inputs.shift().split('');
var right = [];
var opCnt = inputs.shift();
    
for (var input of inputs) {
    switch(input) {
        case 'L':
            if (left.length !== 0) right.push(left.pop());
            break;
        case 'D':
            if (right.length !== 0) left.push(right.pop());
            break;
        case 'B':
            if (left.length !== 0) left.pop();
            break;
        default:
            left.push(input.split(' ')[1]);
            break;
    }
}
console.log(left.concat(right.reverse()).join(''));