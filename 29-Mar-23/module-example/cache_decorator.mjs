// Cache decorator
function cacheDecorator(func){

	let cache = new Map();

	return function(n) {
		if (cache.has(n)){
			return cache.get(n);
		}

		let result = func(n);
		cache.set(n, result);
		return result;
	};
}

export {cacheDecorator};