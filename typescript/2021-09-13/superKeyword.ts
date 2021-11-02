// 슈퍼클래스 생성자 호출
class Person3 {
	constructor(public firstName: string,
		public lastName: string,
		private age: number) { }
}

class Employee3 extends Person3 {
	constructor(firstName: string, lastName: string, age: number, public department: string) {
		super(firstName, lastName, age);
	}
}

const empl3 = new Employee3('Joe', 'Smith', 39, 'Accounting');
console.log(empl3);

// super 키워드 사용
class Person4 {
	constructor(public firstName: string,
		public lastName: string, private age: number) {}

	sellStack(symbol: string, numberOfShares: number) {
		console.log(`Selling ${numberOfShares} of ${symbol}`);
	}
}

class Employee4 extends Person4 {
	constructor(firstName: string, lastName: string, age: number, public department: string) {
		super(firstName, lastName, age);
	}

	sellStack(symbol: string, shares: number) { // 자식 클래스의 sellStack 메소드 정의
		super.sellStack(symbol, shares); // 부모의 sellStack 메소드 호출
		this.reportToCompliance(symbol, shares);
	}

	private reportToCompliance(symbol: string, shares: number) {
		console.log(`${this.lastName} from ${this.department} sold ${shares} shares of ${symbol}`);
	}
}

const empl4 = new Employee4('Joe', 'Smith', 29, 'Accounting');
empl4.sellStack('IBM', 100);