function sum_of_digits(num) {
	let total_sum = 0;

	while(num > 0) {
		n = num%10;
		num = Math.floor(num/10);
		total_sum += n;
	}

	return total_sum;
}

let num_el = document.getElementById("num");
let sum_el = document.getElementById("sum");

let num = prompt("Enter an integer : ");
let sum = sum_of_digits(num);

num_el.innerText = "Number = " + num;
sum_el.innerText = "Sum of Digits = " + sum;

console.log("Number = ", num);
console.log("Sum of Digits = ", sum);