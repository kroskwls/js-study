var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var range = inputs.shift();
inputs = inputs[0].split(' ').map(n => Number(n));

var stack = {
    data: [],
    push: (n) => stack.data.push(n),
    top: () => inputs[stack.data[stack.data.length - 1]],
    pop: () => stack.data.pop(),
    size: () => stack.data.length
};

var answer = [];
for (var i = 0; i < inputs.length; i++) {
    while (stack.top() !== undefined && stack.top() < inputs[i]) {
        inputs[stack.pop()] = inputs[i];
    }
    stack.push(i);
}
while (stack.top() !== undefined) {
    inputs[stack.pop()] = -1;
}
console.log(inputs.join(' '));