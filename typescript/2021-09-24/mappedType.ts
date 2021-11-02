interface Person {
	name: string;
	age: number;
}

const worker: Person = { name: 'John', age: 22 };
function doStuff(person: Readonly<Person>) {
	// person.age = 25;
}

const persons: Person[] = [
	{ name: 'John', age: 32 },
	{ name: 'Mary', age: 33 }
];

// function filterBy<T>(property: any, value: any, array: T[]) {
// 	return array.filter(item => item[property] === value);
// }

function filterBy<T, P extends keyof T>(property: P, value: T[P], array: T[]) {
	return array.filter(item => item[property] === value);
}

console.log(filterBy('name', 'John', persons));
// console.log(filterBy('lastName', 'John', persons));
// console.log(filterBy('age', 'twenty', persons));