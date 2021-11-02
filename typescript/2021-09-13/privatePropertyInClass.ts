class Person5 {
	public firstName = '';
	public lastName = '';
	private age = 0;

	constructor(firstName: string, lastName: string, age: number) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	protected sayHello(): string {
		return `My name is ${this.firstName} ${this.lastName}`;
	}
}

// 생성자의 파라미터와 함께 액세스 한정자 지정
class Person2 {
	constructor(
		public firstName: string, 
		public lastName: string, 
		private age: number
	) { }
}

class Employee2 extends Person5 {
	department = '';

	reviewPerformance(): void {
		this.sayHello();
		this.increasePay(5);
	}

	increasePay(percent: number): void {
		// private 접근자를 사용하기 때문에 접근 불가
		// this.age; 
	}
}

const empl = new Employee2('John', 'Smith', 25);
// protected 접근자를 사용하기 때문에 
// 서브 클래스에서는 접근이 가능하지만 인스턴스에서는 접근이 불가능
// empl.sayHell(); 