var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var range = inputs.shift();
inputs = inputs[0].split(' ').map(n => Number(n));
var cnts = {};
for (var i of inputs) {
    if (!cnts[i]) cnts[i] = 1;
    else cnts[i]++;
}

var stack = {
    data: [],
    push: (n) => stack.data.push(n),
    top: () => stack.data[stack.data.length - 1],
    pop: () => stack.data.pop(),
    size: () => stack.data.length
};
var size = inputs.length;
for (var i = 0; i < size; i++) {
    while (stack.top() !== undefined && cnts[inputs[stack.top()]] < cnts[inputs[i]]) {
        inputs[stack.pop()] = inputs[i];
    }
    stack.push(i);
}
while(stack.top() !== undefined) {
    inputs[stack.pop()] = -1;
}
console.log(inputs.join(' '));