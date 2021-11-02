class Product {
	id: number;
}
function getProducts<T>(id?: T): T extends number ? Product : Product[] {
	if (typeof id === 'number')
		return { id: 123 } as any;
	else
		return [{ id: 123 }] as any;
}

const result1 = getProducts(123);
const result2 = getProducts();

class rPerson {
	id: number;
	name: string;
	age: number;
	address: string;
}
// K를 제외한 모든 T의 타입을 가지는 새로운 타입 생성
type RemoveProps<T, K> = Exclude<keyof T, K>;
// rPerson에서 name과 age를 제외한 속성들의 타입을 가져옴
type RemainingProps = RemoveProps<rPerson, 'name' | 'age'>;
// rPerson에서 RemainingProps의 타입들만 가진 객체 타입을 생성
type PersonBlindAuditions = Pick<rPerson, RemainingProps>;