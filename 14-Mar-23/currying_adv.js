function multiply(num) {
	if (num) {
		return multiply;
	}
	else {
		return num;
	}
}


let mul = multiply(10)(20)(30);

console.log(mul)