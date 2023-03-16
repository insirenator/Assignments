let arr = [1,2,3,4,5,6];

// For...of

for (const val of arr) {
	console.log(val)
}

console.log();

// For...in

for (const i in arr) {
	console.log(`${i} --> ${arr[i]}`);
}

console.log();

// ForEach()

arr.forEach((val) => console.log(val));

console.log();

// map()

arr.map((val) => console.log(val));