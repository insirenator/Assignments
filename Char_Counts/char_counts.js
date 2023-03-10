function isLetter(ch) {
	let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

	return letters.includes(ch);
}

function isNumber(ch) {
	let numbers = "0123456789";

	return numbers.includes(ch);
}

let string_el = document.getElementById("string");
let letters_el = document.getElementById("letters");
let numbers_el = document.getElementById("numbers");
let spaces_el = document.getElementById("spaces");
let others_el = document.getElementById("others");

let letters_count = 0;
let numbers_count = 0;
let spaces_count = 0;

let string = prompt("Enter String : ");

for (var i = string.length - 1; i >= 0; i--) {
	if(isLetter(string[i])) {
		letters_count += 1;
	}
	if(isNumber(string[i])) {
		numbers_count += 1;
	}
	if(string[i] === ' ') {
		spaces_count += 1;
	}
}

let other_char_count = string.length - (letters_count + numbers_count + spaces_count);

string_el.innerText = "String = " + string;
letters_el.innerText = "Total letters = " + letters_count;
numbers_el.innerText = "Total Numbers  = " + numbers_count;
spaces_el.innerText = "Total Spaces = " + spaces_count;
others_el.innerText = "Others Characters = " + other_char_count;

console.log("String = " + string);
console.log("Total letters = " + letters_count);
console.log("Total Numbers  = " + numbers_count);
console.log("Total Spaces = " + spaces_count);
console.log("Others Characters = " + other_char_count);