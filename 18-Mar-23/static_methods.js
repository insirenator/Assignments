// A class that keeps the count of its total
// created instances.

class User {
	constructor(id) {
		this.id = id;
		User.incrementInstances();

	}

	static incrementInstances() {
		User.instanceCount++;
	}

}

User.instanceCount = 0;

let u1 = new User(1);
let u2 = new User(2);
let u3 = new User(3);
let u4 = new User(4);
let u5 = new User(5);

console.log(User.instanceCount); // 5