function sum(num) {
	return function (n) {
		return num + n;
	};
}

// Using sum(10)(20)
let a = sum(10)(20);
console.log("Using sum(10)(20) : ", a);

// Using b(20)
const b = sum(10);
console.log("Using b(20) : ", b(20));

// Calling a function expression directly
const c = function (msg) {
	return msg.toUpperCase();
}("hello");

console.log(c);