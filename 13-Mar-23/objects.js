// Object Literal

let dog = {
	name : 'tommy',
	age : 4,
	bark : function () {
		console.log('BARK!!!');
	},

	get info() {
		return `${this.name} is ${this.age} years old. His agent name is ${this.agentname}` // accessing a property that us 
	}
};

console.log(dog.name);
console.log(dog.age);
dog.bark();
console.log(dog.info);

dog.agentname = 'Agent D';

console.log(dog.agentname);
console.log(dog);