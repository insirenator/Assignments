// Separates the even and odd elements
function sep_even_odd(arr) {
	let evens = [],
		odds = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i]%2 === 0) {
			evens.push(arr[i]);
		}
		else {
			odds.push(arr[i]);
		}
	}

	return [evens, odds];
}

let arr = [1,2,3,4,5,6,7,8,9,10];

const [evens, odds] = sep_even_odd(arr);

console.log("Array = ", arr);
console.log("Evens = ", evens); 
console.log("Odds = ", odds); 