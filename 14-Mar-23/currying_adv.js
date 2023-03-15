function sum(a) {
	return function(b) {
		if (b) return sum(a+b);
		return a;
	}
}

let s = sum(10)(20)(10)();

console.log(s)

function mult(a) {
	return function(b) {
		if (b) return sum(a*b);
		return a;
	}
}

let m = mult(10)(20)(10)();

console.log(m)