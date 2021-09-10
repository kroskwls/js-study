function padLeft2(value: string, padding: string | number): string {
	if (typeof padding === 'number')
		return Array(padding + 1).join(' ') + value;

	if (typeof padding === 'string')
		return padding + value;
}

console.log(padLeft2('Hello world', 4));
console.log(padLeft2('Hello world', 'John says '));
// console.log(padLeft2('Hello world', true)); // compile error

function padLeft3(value: string, padding: string | number): string {
	if (typeof padding === 'number') 
		return Array(padding + 1).join(' ') + value;

	if (typeof padding === 'string') {
		return padding + value;
	} else {
		return padding; // never type
	}
}

