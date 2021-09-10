// type keyword
type Foot = number;
type Pound = number;

type Patient = {
	name: string;
	height: Foot;
	weight: Pound;
}

let patient: Patient = {
	name: 'Joe Smith',
	height: 5,
	weight: 100
}

// // weight 속성이 없어서 error
// let patient2: Patient = {
// 	name: 'Joe Smith',
// 	height: 5
// }

// weight를 필수가 아닌 옵션 사항으로 지정
type Patient2 = {
	name: string;
	height: Foot;
	weight?: Pound;
}

let patient2: Patient2 = {
	name: 'Joe Smith',
	height: 5
}