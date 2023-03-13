function clone(arr) {
	return arr.slice(0);
}

console.log(clone([1,2,3]));
console.log(clone([1,2,[3,4]]));