class Person {
	firstName: string;
	lastName: string;
	age: number;
}
const p = new Person();
p.firstName = "John";
p.lastName = "Smith";
p.age = 25;

class Person2 {
	constructor(public firstName: string, public lastName: string, public age: number) { };
}
const p2 = new Person2("John", "Smith", 25);

class Block {
	readonly nonce: number; // 생성자 내부에 초기화된 프로퍼티
	readonly hash: string;
	constructor(
		readonly index: number, // 초기화 중 프로터피 값이 생성자로 전달
		readonly previousHash: string,
		readonly timestamp: number,
		readonly data: string
	) {
		// const { nonce, hash } = this.mine(); // mine() 메서드에서 반환된 객체를 구조 분해 구문으로 상수 전달
		// this.nonce = nonce;
		// this.hash = hash;
	}
}