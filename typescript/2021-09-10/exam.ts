class Dog {
	readonly type = 'dog';
	constructor(readonly name: string) { }
	sayHello(): string {
		return 'hello';
	}
}

class Fish {
	readonly type = 'fish';
	constructor(readonly name: string) { }
	dive(howDeep: number): string {
		return `Dived ${howDeep} feet`;
	}
}

type Pet = Dog | Fish;

function talkToPet(pet: Pet): string {
	let output: string;

	// if (pet.type === 'dog') {
	// 	output = `Your pet said ${pet.sayHello()}`;
	// } else if (pet.type === 'fish') {
	// 	output = "Fish cannot talk. sorry.";
	// }

	if (pet instanceof Dog) {
		output = `Your pet said ${pet.sayHello()}`;
	} else if (pet instanceof Fish) {
		output = "Fish cannot talk. sorry.";
	}

	return output;
}

const dog = new Dog('Sammy');
const fish = new Fish('Marry');
const otherObj = { name: 'Josh' };

console.log(talkToPet(dog));
console.log(talkToPet(fish));
// console.log(talkToPet(otherObj));