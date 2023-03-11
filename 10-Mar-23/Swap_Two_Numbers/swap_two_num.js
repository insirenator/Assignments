let num1_el = document.getElementById("num1");
let num2_el = document.getElementById("num2");

let num1 = prompt("Enter Number 1 : ");
let num2 = prompt("Enter Number 2 : ");

num1_el.innerText = "Number 1 = " + num1;
num2_el.innerText = "Number 2 = " + num2;

function swap() {
	let temp = num1;
	num1 = num2;
	num2 = temp;
	
	num1_el.innerText = "Number 1 = " + num1;
	num2_el.innerText = "Number 2 = " + num2;
}