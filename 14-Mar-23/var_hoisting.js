// Hoisting in Javascript
console.log(foo);	// undefined
var foo;

console.log(bar);	// undefined
var bar = 6;
console.log(bar);	// 6

// Function hoisting

hello();

function hello() {
	console.log('HELLO');
};

/*
	NOTE: only function statements are hoisted,
		  not function expressions and arrow functions.

*/