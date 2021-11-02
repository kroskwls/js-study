interface MotorVehicle {
	startEngine(): boolean;
	stopEngine(): boolean;
	brake(): boolean;
	accelerate(speed: number);
	honk(howLong: number): void;
}

class Car implements MotorVehicle {
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
}
const car = new Car();
car.startEngine();

interface Flyable {
	fly(howHigh: number);
	land();
}

interface Swimmable {
	swim(howFar: number);
}

class SecretServiceCar extends Car implements Flyable, Swimmable {
	fly(howHigh: number) {
		console.log(`Flying ${howHigh} feets`);
	}

	land() {
		console.log(`Land complete`);
	}

	swim(howFar: number) {
		console.log(`Swimming ${howFar} meters`);
	}
}
const secretServiceCar = new SecretServiceCar();
secretServiceCar.fly(10);
secretServiceCar.land();
secretServiceCar.swim(100);