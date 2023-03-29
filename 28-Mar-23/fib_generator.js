function* fibonacci(n) {
	let a = 0, b = 1;

	for(let i = 0; i < n; i++){
		
		yield a;
		[a, b] = [b, a+b];
		
		/*let temp = a+b;
		a = b;
		b = temp;*/
	}
}

let fib = fibonacci(10);

console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());

/*for(const f of fib) {
	console.log(f);
}*/