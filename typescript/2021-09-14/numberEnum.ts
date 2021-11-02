enum Weekdays {
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday,
	Sunday,
}

let dayOff = Weekdays.Monday;
console.log(dayOff, Weekdays[0]);
console.log(Weekdays);


function convertTemperature(temp: number, fromTo: string): number {
	return 'FtoC' === fromTo ? (temp - 32) * 5.0 / 9.0 : temp * 9.0 / 5.0 + 32;
}
console.log(`70F is ${convertTemperature(70, 'FtoC')}C`);
console.log(`21C is ${convertTemperature(21, 'CtoF')}F`);
console.log(`35C is ${convertTemperature(35, 'ABCD')}F`);

enum Direction {
	FtoC,
	CtoF
}
function convertTemperature2(temp: number, fromTo: Direction): number {
	return fromTo === Direction.FtoC ? (temp - 32) * 5.0 / 9.0 : temp * 9.0 / 5.0 + 32;
}
console.log(`70F is ${convertTemperature2(70, Direction.FtoC)}C`);
console.log(`21C is ${convertTemperature2(21, Direction.CtoF)}F`);
console.log(`21C is ${convertTemperature2(21, 99)}F`);