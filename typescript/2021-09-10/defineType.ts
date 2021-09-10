function calcTax(state: string, income: number, dependents: number): number | undefined {
	if (state === 'NY') {
		return income * 0.06 - dependents * 500;
	} else if (state === 'NJ') {
		return income * 0.05 - dependents * 300;
	}
}
// // dependents type error
// let tax1: number = calcTax('NJ', 50000, 'two'); 
// // return value type error
// let tax2: string = calcTax('NJ', 50000, 2); 

function padLeft(value: string, padding: any): string {
	if (typeof padding === 'number') {
		return Array(padding + 1).join(' ') + value;
	}

	if (typeof padding === 'string') {
		return padding + value;
	}
	throw new Error(`Expected string or number, got '${padding}'`);
}