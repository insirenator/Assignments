// Variables declared using 'let' or 'const' are hoisted
// but cannot be accessed before their declaration. This
// is due to the reason that they are in Temporal dead Zone
// until they are declared.

// The Temporal Dead Zone of a variable starts when the 
// scope, that they are defined in, is entered and ends
// with their declaration

/*let a = 23;
console.log(a);

if (true) {							// \
	console.log("Inside Scope.");	// | Temporal Dead Zone of	
	console.log(a);					// | Variable 'b'.
	console.log(b);					// /
	let b = 32;
}*/

// Interesting thing about TDZ

if (true) {

	function print() {
		console.log(a)
	}

	let a = 20;
	print(); //20
}  

// In the above snippet, 'a' is accessed in its TDZ
// TDZ is not about "where" the variable is accessed but
// "when" the variable is accessed. That is why it is called
// "Temporal" Dead Zone.