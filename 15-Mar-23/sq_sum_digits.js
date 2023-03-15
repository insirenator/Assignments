let num = 1234 // 1 + 4 + 9 + 16

function sq_sum_dig(num) {

	let sq_sum = 0;

	while(num !== 0) {
		let n = num % 10;
		sq_sum = sq_sum + n**2;
		num = parseInt(num/10)
	}

	return sq_sum;
}

console.log(sq_sum_dig(num));