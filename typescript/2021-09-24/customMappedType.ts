interface roPerson {
	readonly name: string;
	readonly age: number;
	address?: string;
}

type Modifiable<T> = {
	-readonly [P in keyof T]: T[P];
};

const worker1: roPerson = { name: 'John', age: 25 };
// worker1.age = 27;
const worker2: Modifiable<roPerson> = { name: 'John', age: 25 };
worker2.age = 27;

// 내장 매핑 타입
// 모든 속성을 선택 사항으로 만듦
const person1: Partial<roPerson> = { name: 'John' };
// 모든 속성을 필수 사항으로 만듦
const person2: Required<roPerson> = { name: 'John', age: 25, address: 'Gunpo' };
// 속성을 선택해서 새로운 매핑 타입 생성
// roPerson에서 name과 address 타입을 가져와서 새로운 PersonNameAddress 타입을 생성
type PersonNameAddress<T, K> = Pick<roPerson, 'name'|'address'>;