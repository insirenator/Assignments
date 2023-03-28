// Maps in JS are equivalent to Dictionaries in python

let map1 = new Map();	// Empty Map
map1.set(1, "Hello")
	.set("1", "World")
	.set(true, "FALSE");

console.log(map1.get(1));	// "Hello"
console.log(map1.get("1"));	// "World"

console.log(map1.has(1));	// true
console.log(map1.has(2));	// false

console.log(map1.entries());
console.log(map1.keys());
console.log(map1.values());

// Maps => Objects
let obj = Object.fromEntries(map1.entries());
console.log(obj);

// Objects => Maps
let map2 = new Map(Object.entries(obj));
console.log(map2);