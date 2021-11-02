function whoAmI(target: Function): void {
	console.log(`You are: \n ${target}`);
}

@whoAmI
class Friend {
	constructor(private name: string, private age: number) { }
}

const f = new Friend('Josh', 35);
console.log(f);