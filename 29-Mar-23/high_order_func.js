function area(r) {
	return Math.PI*r*r;
}

function circum(r) {
	return 2*Math.PI*r;
}

function diameter(r) {
	return 2*r;
}

function calculate(arr, fn) {
	let modArr = [];
	for (let i of arr) {
		modArr.push(fn(i));
	}

	return modArr;
}

let arr = [1,2,3,4,5];

console.log(calculate(arr, area));