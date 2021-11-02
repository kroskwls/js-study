function whoAmI(target: Function): void {
	console.log(`You are: \n ${target}`);
}

@whoAmI
class Friend {
	constructor(private name: string, private age: number) { }
}


function UIcomponent(html: string) {
	console.log(`The decorator received ${html} \n`);
	return function (target: Function) {
		console.log(`Someone wants to create a UI component from \n ${target}`);
	}
}

@UIcomponent('<h1>Hello Shopper!</h1>')
class Shopper {
	constructor(private name: string) {}
}



type constructorMixin = { new(...args: any[]): {} };
function useSalutation(salutation: string) {
	return function <T extends constructorMixin>(target: T) {
		return class extends target {
			name: string;
			private message = 'Hello ' + salutation + this.name;
			sayHello() {
				console.log(`${this.message}`);
			}
		}
	}
}

@useSalutation('Mr.')
class Greeter {
	constructor(public name: string) { }
	sayHello() {
		console.log(`Hello ${this.name}`);
	}
}

const grt = new Greeter('John');
grt.sayHello();