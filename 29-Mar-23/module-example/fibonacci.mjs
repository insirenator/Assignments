// Import the cache decorator
import {cacheDecorator} from './cache_decorator.mjs';

// Fibonacci Function
function fibonacci(n) {
	if (n <= 1)
		return 0;
	if (n === 2)
		return 1;

	return fibonacci(n-2) + fibonacci(n-1);
}

fibonacci = cacheDecorator(fibonacci);

for (let i of [1,2,3,4,5,6,7,8,9,10]) {
	console.log(fibonacci(i));
}