function isPhoneNum(num) {
	return (/^(\+\d\d)?\d{10}$/).test(num);
}

console.log(isPhoneNum("9419227054"));
console.log(isPhoneNum("94192270"));
console.log(isPhoneNum("941922!@#$"));
console.log(isPhoneNum("+919419227054"));