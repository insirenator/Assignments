class Car {
	constructor(make, model) {
		this.make = make;
		this.model = model;
		this.currentGear = 'P';
		this.gears = ['P', 'N', 'R', 'D'];
	}

	shift(gear) {
		if (!this.gears.includes(gear))
			throw new Error(`Invalid Gear : ${gear}`);

		this.currentGear = gear;
	}
}

let car1 = new Car('Mercedez', 'Benz');
let car2 = new Car('Mazda', '3i');

car1.shift('R');
car2.shift('D');

console.log(car1.currentGear);	// R
console.log(car2.currentGear);	// D

// car1.shift('X'); // Error