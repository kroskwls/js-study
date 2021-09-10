class Person3 {
	name: string;
}

class Customer {
	name: string;
}

// 타입의 구조가 같으므로 상호 호환 가능
const cust1: Customer = new Person3();
const cust2: Customer = { name: 'Mary' };
const pers: Person3 = { name: 'John' };

class Person4 {
	name: string;
	age: number;
}

class Customer2 {
	name: string;
}

// Customer2에서 필요한 속성을 Person4에서 모두 가지고 있기 때문에 할당 가능
const cust3: Customer2 = new Person4();
// Customer2에서 Person4의 age 속성을 가지고 있지 않기 때문에 할당 불가능
// const pers2: Person4 = new Customer2();