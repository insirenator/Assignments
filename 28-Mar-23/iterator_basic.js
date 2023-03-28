// Iterators act as a bookmark in an iterable data collection

const data = [
	"HEllo",
	"World",
	149,
	9.14,
	"bye"
];

// We can get an iterator form an Array using .values() method
let iter = data.values();

// Each item can be accessed using .next() method
// It returns an object in the form {value, done}

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// to just get value, use .next().value

console.log(iter.next().value);