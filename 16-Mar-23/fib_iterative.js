// first N numbers in fibonacci series

function fibonacci(n) {
	let a = 0
	let b = 1
	let c;

	let fib = [a, b];

	n = n - 2;

	while(n !== 0) {
		c = a + b;
		fib.push(c);
		a = b;
		b = c;
		n--;
	}

	return fib;
}

console.log(fibonacci(10))