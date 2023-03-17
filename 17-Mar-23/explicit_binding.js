// Explicit Binding

let vector = {
	x: 3,
	y: 7,
};

function mod() {
	return Math.sqrt(this.x**2 + this.y**2);
}

let m = mod.bind(vector);

console.log(m());