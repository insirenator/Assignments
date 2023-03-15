let obj = {
	name: 'john',
	age: 12,
	code: 1801,
};

let arr = ['john', 12, 1801];

for (let key in obj) {
	console.log(key);	// name, age, code
}

console.log();

for (let key in arr) {
	console.log(key);	// 0, 1, 2
}

console.log();

for (let key of arr) {
	console.log(key);	// name, age, code
}