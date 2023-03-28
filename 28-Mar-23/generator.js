// Generators
function* rainbow() {
	console.log('1');
	yield 'red';
	console.log('1');
	yield 'orange';
	console.log('1');
	yield 'yellow';
	console.log('1');
	yield 'green';
	console.log('1');
	yield 'blue';
	console.log('1');
	yield 'indigo';
	console.log('1');
	yield 'violet';
}

// A Generator function doesnot run right away
// It returns an iterator
const it = rainbow();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

for (const color of rainbow()){
	console.log(color);
}