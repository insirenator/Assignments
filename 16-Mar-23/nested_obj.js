let nobj = {
	name: 'Shakeeb',
	age: 21,
	country: {
		state: 'J&K',
		city: 'Jammu',

		getCountry() { return `${this.city}, ${this.state}`;},
	},

	getinfo() {
		return `${this.name}, ${this.age}, ${this.country.getCountry()}`;
	},
}

console.log(nobj.name);
console.log(nobj.age);
console.log(nobj.country.state);
console.log(nobj.country.city);

console.log(nobj.getinfo());