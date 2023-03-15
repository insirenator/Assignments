// Sum of Digits
function sumDig(num) {
	if(num === 0) {
		return 0;
	}

	/*n = num % 10;
	num = parseInt(num / 10);

	return n + sumDig(num)*/

	return (num % 10) + sumDig(parseInt(num/10));
}

//console.log(sumDig(12345));

/*
	12345

	1+2+3+4+5 = 15

	sumDigit(12345) -> sumDigit(1234) + 5
	sumDigit(1234)	-> sumDigit(123) + 4 
	sumDigit(123)	-> sumDigit(12) + 3 
	sumDigit(12)	-> sumDigit(1) + 2  
*/

// Factorial

function fact(n) {
	if (n <= 1)
		return 1;

	return n * fact(n-1);
}

console.log(fact(5));