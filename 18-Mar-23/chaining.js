let calc = {
	val: 0,

	add(v) {
		this.val += v;
		return this;
	},

	mult(v) {
		this.val *= v;
		return this;
	},

	minus(v) {
		this.val -= v;
		return this;
	},

	div(v) {
		if (v)
			this.val /= v;
		return this;
	},
};

calc.add(10).minus(5).mult(10).div(2);

console.log(calc.val);