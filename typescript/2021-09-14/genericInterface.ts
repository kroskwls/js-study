interface Comparator<T> {
	compareTo(value: T): number;
}

class Rectangle implements Comparator<Rectangle> {
	constructor(private width: number, private height: number) { }
	compareTo(value: Rectangle): number {
		return this.width * this.height - value.width * value.height;
	}
}

const rect1: Rectangle = new Rectangle(2, 5);
const rect2: Rectangle = new Rectangle(2, 3);
let result = rect1.compareTo(rect2) > 0 ? "rect1 is bigger" : (
	rect1.compareTo(rect2) === 0 ? "rectangles are equal" : "rect1 is smaller"
);
console.log(result);

class Programmer implements Comparator<Programmer> {
	constructor(public name: string, private salary: number) { }
	compareTo(value: Programmer): number {
		return this.salary - value.salary;
	}
}

const p1: Programmer = new Programmer('John', 20000);
const p2: Programmer = new Programmer('Alex', 30000);
result = p1.compareTo(p2) > 0 ? `${p1.name} is richer` : (
	p1.compareTo(p2) === 0 ? `${p1.name} and ${p2.name} earn the same amounts` : `${p1.name} is poorer`
);
console.log(result);