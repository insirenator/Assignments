// Implicit Binding

let vector = {
	x: 3,
	y: 7,

	mod() {
		return Math.sqrt(this.x**2 + this.y**2);
	}
}

console.log(vector.mod());