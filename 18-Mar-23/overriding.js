// Person Class
class Person {
	constructor(name) {
		this.name = name;
	}

	sayHello() {
		console.log(`Hi, I am ${this.name}`);
	}
}

let p1 = new Person('john');
let p2 = new Person('mike');

p1.sayHello();
p2.sayHello();

p1.sayHello = function() { console.log(`HI, I AM ${this.name.toUpperCase()}`); };

console.log();

p1.sayHello();	// Overridden
p2.sayHello();

Person.prototype.sayHello(); // Refers to the sayHello in Person.

let p3 = new Person('anil');

Person.prototype.sayHello.call(p3); // same as p3.sayHello()