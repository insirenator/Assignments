// objects are always passed aroung using references.

let a = {name: 'john', age: 10};
let b = a // Both a and b reference to the same object.

b.age = 18;

console.log(a);

// To copy or merge objects, use Object.assign()

let c = {}; // Empty object

Object.assign(c, a); 

console.log(c);

// Merging
x = {};
y = {name: 'john', age: 10};
z = {class: 10};

Object.assign(x, y, z);
console.log(x);

// Simple cloning
let w = Object.assign({}, x, {greet: true});
console.log(w);