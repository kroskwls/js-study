export interface People {
	name: string;
	age: number;
	url: string;
	note?: string;
};

export interface IState {
	people: People[]
};