// Class representing a car

class Car {

	constructor(make, model) {
		this.make = make;
		this.model = model;
	}
}

// Instances
let car1 = new Car('Tesla', 'S3');
let car2 = new Car('Mazda', '3');

console.log(car1);
console.log(car2.toString());

// instanceof operator
console.log(car1 instanceof Car);	// true
console.log(car2 instanceof Array);	// false