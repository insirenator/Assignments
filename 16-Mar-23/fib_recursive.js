// first N numbers in fibonacci series

function fibonacci(n) {
	let a = 0;
	let b = 1;

	function _fibonacci(n, a, b, fib) {
		if (n === 0)
			return fib;

		fib.push(a+b);

		return _fibonacci(n-1, b, a+b, fib);

	}

	return _fibonacci(n-2, a, b, [a, b]);
}

console.log(fibonacci(10))