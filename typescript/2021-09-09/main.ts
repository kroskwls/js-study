function getFindPrice(price: number, discount: number) {
	return price - price / discount;
}

console.log(getFindPrice(100, 100));

let firstName: string;
let age: number;
let flag: boolean;

const ord = Symbol('orderID');
const myOrder = {
	ord: "123",
};
console.log(ord);
console.log(myOrder);
console.log(myOrder['ord']);
for (let key in myOrder) {
	console.log(key, myOrder[key]);
}

const ord2 = Symbol('orderID');

const yourOrder = {};
yourOrder[ord] = '1234';
yourOrder[ord2] = 1234;
console.log(yourOrder);
console.log(yourOrder[ord]);
console.log(yourOrder[Symbol('orderID')]);
for (let key in yourOrder) {
	console.log(key, yourOrder[key]);
}
// Object.keys(), for in 등과 같은 ES6 이전 메소드에서 걸러짐
let s = Symbol("test")
console.log(s === Symbol("test")) // false
let sf = Symbol.for("test")
console.log(sf === Symbol.for("test")) // true

function logError(errorMessage: string): void {
	console.error(errorMessage);
}
console.log(logError("log"));

let name1: 'John Smith';
console.log(name1);