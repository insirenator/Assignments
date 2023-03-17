// Multiplies the numbers with the first argument
function arrayMult(n, ...nums) {
	let mod_nums = [];

	nums.forEach((val) =>{
		mod_nums.push(n*val);
	});

	return mod_nums
}


let marr = arrayMult(3, 1, 4, 6, 9, 3, 2);

console.log(marr);