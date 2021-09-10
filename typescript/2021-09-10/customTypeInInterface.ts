// class로 빌드하면 js파일에 class 코드가 포함되지만
// interface로 빌드하면 js파일에 코드가 포함되지 않는다
interface Person {
	firstName: string;
	lastName: string;
	age: number;
}

function savePerson (person: Person): void {
	console.log('Saving ', person);
}

const p1: Person = {
	firstName: 'John',
	lastName: 'Smith',
	age: 25
};

savePerson(p1);

// 구조적 타입 시스템
// 타입을 Person으로 명시하지 않아도 구조적으로 같은 구조를 가지고 있기 때문에 호환 가능
const p3 = {
	firstName: 'John2',
	lastName: 'Smith2',
	age: 25
};

savePerson(p3);

// type, interface, class의 사용시점
// 타입스크립트의 타입 검사기로 안전하게 커스텀 타입을 선언하고자 한다면 type, interface 사용
// class는 런타임 코드에 포함되기 때문에 용량이 증가