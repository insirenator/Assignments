// Returns array
function sum_even_odd1(arr) {
	let evenSum = 0,
		oddSum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i]%2 === 0) {
			evenSum += arr[i];
		}
		else {
			oddSum += arr[i];
		}
	}

	return [evenSum, oddSum];
}

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const [evenSum, oddSum] = sum_even_odd1(arr);

console.log("ARRAY = ", arr);
console.log("EVEN SUM = ", evenSum);
console.log("ODD SUM = ", oddSum); 