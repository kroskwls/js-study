class Product2 {
	id: number;
	description: string;
	// 생성자 오버로딩
	constructor();
	constructor(id: number);
	constructor(description: string);
	constructor(id: number, description: string);

	constructor(id?: number | string, description?: string) {
		console.log(arguments);
		if (!!id) {
			if (typeof id === 'number') {
				this.id = id;
			} else if (typeof id === 'string') {
				this.id = 999;
				this.description = id as string;
			}
		}

		if (!!description) 
			this.description = description;
	}

}

const p1 = new Product2();
const p2 = new Product2(123);
const p3 = new Product2(789, 'blue jean');
const p4 = new Product2('black jean');
console.log(p1, p2, p3, p4)