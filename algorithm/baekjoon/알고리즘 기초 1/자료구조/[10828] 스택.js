var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
inputs = inputs.map(input => input.split(' '));

var answer = '';
var stack = [];
for (var input of inputs) {
    switch(input[0]) {
        case 'push':
            stack.push(input[1]);
            break;
        case 'pop':
            var data = stack.pop();
            answer += (data ? data : -1) + '\n';
            break;
        case 'size':
            answer += stack.length + '\n';
            break;
        case 'empty':
            answer += (stack.length === 0 ? 1 : 0) + '\n';
            break;
        case 'top':
            answer += (stack.length === 0 ? -1 : stack[stack.length - 1]) + '\n';
            break;
    }
}
console.log(answer);