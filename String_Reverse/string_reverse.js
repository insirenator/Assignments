function reverse_string(str) {
	let rev_str = "";
	for (let i = str.length - 1; i >= 0; i--) {
		rev_str += str[i];
	}
	return rev_str;
}

let string_el = document.getElementById("string");
let reverse_el = document.getElementById("reverse");

let string = prompt("Enter a String : ");

let reverse = reverse_string(string);

string_el.innerText = "String = " + string;
reverse_el.innerText = "Reversed = " + reverse;

console.log("String = ", string);
console.log("Reversed = ", reverse);

