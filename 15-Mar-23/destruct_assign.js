// Normal Object
const obj = {b:1, c:2, d:3};

// Destructured assignment
const {a,b,c} = obj;

console.log(obj);
console.log(a);		// undefined, no such property
console.log(b);		// 1
console.log(c);		// 2

/*
	Destructuring with only assignment also works but 
	surround it with parantheses.

	let a,b,c;
	{a,b,c} = obj; // Causes error!

	({a,b,c} = obj); // Works.
*/