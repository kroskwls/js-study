interface MotorVehicle2 {
	startEngine(): boolean;
	stopEngine(): boolean;
	brake(): boolean;
	accelerate(speed: number);
	honk(howLong: number): void;
}

interface Flyable2 extends MotorVehicle2 {
	fly(howHigh: number);
	land();
}

interface Swimmable2 extends MotorVehicle2 {
	swim(howFar: number);
}

class SecretServiceCar2 implements Flyable2, Swimmable2 {
	startEngine(): boolean {
		return true;
	}

	stopEngine(): boolean {
		return true;
	}

	brake(): boolean {
		return true;
	}

	accelerate(speed: number) {
		console.log(`Driving faster`);
	}

	honk(howLong: number): void {
		console.log(`Beep beep yeah!`);
	}

	fly(howHigh: number) {
		console.log(`FLying ${howHigh} feet high`);
	}

	land() {
		console.log('Landing. Fasten your belts');
	}

	swim(howFar: number) {
		console.log(`Swimming ${howFar} feet`);
	}
}