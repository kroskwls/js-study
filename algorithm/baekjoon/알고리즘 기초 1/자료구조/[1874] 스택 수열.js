var inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(n => Number(n));
var range = inputs.shift();

var obj = [];
var stack = {
    push: (n) => (outputs += '+\n', obj.push(n)),
    pop: () => (outputs += '-\n', obj.pop()),
    top: () => obj[obj.length -1],
    size: () => obj.length
};

var num = 1;
var outputs = '';
for (var n of inputs) {
    while(num <= range && stack.top() != n) {
        stack.push(num);
        num++;
    }
    
    if (stack.top() == n) {
        stack.pop();
    }
}
console.log(stack.size() === 0 ? outputs : "NO");