// Simple Factorial Function
function factorial(num) {
	if (num <= 1) {
		return 1;
	}

	return num * factorial(num - 1);
}

/*console.log(factorial(3));	// 6
console.log(factorial(4));	// 24
console.log(factorial(1));	// 1
console.log(factorial(-2)); // 1
console.log(factorial(0));	// 1*/

// Decorator for the factorial function
function cacheDecorator(func) {

	// A Map to store the factorials
	let cache = new Map();

	return function(num) {
		// If the cache already has the factorial of num
		if (cache.has(num)) 
			return cache.get(num);

		// Else calculate it and add to cache
		let result = func(num);
		cache.set(num, result);
		console.log(`SET TO CACHE : ${num} -> ${result}`);
		console.log(cache);
		return result;
	}
}

factorial = cacheDecorator(factorial);

console.log(factorial(3));
console.log();
console.log(factorial(4));
