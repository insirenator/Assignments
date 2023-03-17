function linearSearch(arr, num) {

	let index = -1

	arr.forEach((val, idx) => {
		if (val === num)
			index = idx
	});

	return index
}

let i = linearSearch([1,2,3,4,5], 10);

console.log(i);