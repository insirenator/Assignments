let arr = [1,9,5,19,100,25,8,9,10];

console.table(arr);
console.table(arr.sort()); // Alphabetical sort

arr.sort((a,b) => {
	return a-b; 
});

console.table(arr); // Numeric sort