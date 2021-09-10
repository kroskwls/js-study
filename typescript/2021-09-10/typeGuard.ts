interface A {
	a: number;
}

interface B {
	b: string;
}

function foo(x: A | B) {
	if ('a' in x) {
		return x.a;
	}
	return x.b;
}
// 1. 특정 프로퍼티를 확인하여 체크
//  - {value} in obj
// 2. 객체에 식별자 프로퍼티를 정의하여 체크
//  - type Person = { discriminator: 'person'; }
//  - person.type === 'person'
// 3. instanceof 연산자를 사용하여 체크
//  - person instanceof Person