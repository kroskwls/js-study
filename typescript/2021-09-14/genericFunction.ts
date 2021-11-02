function printMe<T>(content: T): T {
	console.log(content);
	return content;
}

const a = printMe('Hello');

class tPerson {
	constructor(public name: string) { }
}

const b = printMe(new tPerson('Joe'));
console.log('typeof a', typeof a, ', typeof b', typeof b);

const printMe2 = <T>(content: T): T => {
	console.log(content);
	return content;
};

const aa = printMe2('Hello');
const bb = printMe2(new tPerson('Joe'));
const cc = printMe<string>('Hi');
const dd = printMe<tPerson>(new tPerson('Josh'));