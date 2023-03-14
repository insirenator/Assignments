function multNumericProps(obj) {
	for (let key in obj) {
		if (typeof obj[key] === "number") {
			obj[key] *= 2;
		}
	}
}

let obj = {
	a: 10,
	b: 12,
	c: "hello",
};

console.log(obj);

multNumericProps(obj);

console.log(obj);