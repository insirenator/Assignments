// Armstrong Number :  3^3 + 7^3 + 1^3 = 371

function isArmstrong(num){
	let sum = 0;
	let n = num;
	while(n !== 0) {
		sum += (n % 10)**3;
		n = parseInt(n / 10);
	}

	return (sum === num) ? "yes" : "no";
}

console.log(isArmstrong(371));
console.log(isArmstrong(321));