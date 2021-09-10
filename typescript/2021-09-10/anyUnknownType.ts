// type Person1 = {
// 	address: string;
// }
type Person1 = {
	discriminator: 'person';
	address: string;
}

let person1: any;
person1 = JSON.parse('{"adress":"25 Broadway"}'); 
console.log(person1.address); // adress 오타로 인해서 undefined 출력

let person2: unknown;
person2 = JSON.parse('{"adress":"25 Broadway"}'); 
// console.log(person2.address); // 컴파일 오류 발생

// return type을 {variable} is {Type}으로 선언하여 typescript 컴파일러가 object의 타입 인식
const isPerson = (object: any): object is Person1 => !!object && object.discriminator === 'person';
if (isPerson(person2)) {
	console.log(person2.address);
} else {
	console.log('person2 is not a Person');
}