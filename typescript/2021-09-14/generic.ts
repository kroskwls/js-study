let sameVlues1: number[];
let sameVlues2: Array<number>;

class Person {
	name: string;
}

class Employee extends Person {
	department: number;
}

class Animal {
	name: string;
	breed: string;
}
const workers: Array<Person> = [];
// const workers: Person[] = [];

workers[0] = new Person();
workers[1] = new Employee();
workers[2] = new Animal();
workers[3] = { name: 'Mary' };


