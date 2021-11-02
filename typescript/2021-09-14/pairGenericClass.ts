class Pair<K, V> {
	constructor(public key: K, public value: V) { }
}

function compare<K, V>(pair1: Pair<K, V>, pair2: Pair<K, V>): boolean {
	return pair1.key === pair2.key && pair1.value === pair2.value;
}

let pair1: Pair<number, string> = new Pair(1, 'Apple');
let pair2 = new Pair(1, 'Orange');
console.log(compare<number, string>(pair1, pair2));

let pair3 = new Pair('first', 'Apple');
let pair4 = new Pair('first', 'Apple');
console.log(compare(pair3, pair4));

interface User {
	name: string;
	role: UserRole;
}

enum UserRole {
	Administrator = 'admin',
	Manager = 'manager',
}

function loadUser<T>(): T {
	return JSON.parse('{ "name": "john", "role": "admin" }');
}
const user = loadUser<User>();

switch(user.role) {
	case UserRole.Administrator:
		console.log('Show control panel');
		break;
	case UserRole.Manager:
		console.log('Hide control panel');
		break;
}