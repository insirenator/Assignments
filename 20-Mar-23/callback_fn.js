function applyFn(num, fn) {
	return fn(num);
}

let result = applyFn(9, (num) => {
	return num**2;
});

console.log(result);