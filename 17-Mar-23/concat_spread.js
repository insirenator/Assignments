
// concatenating using spread(...) operator
function concatSpread(arr) {
	return [...arr, ...arr];
}

console.log(concatSpread([1,2,3]));