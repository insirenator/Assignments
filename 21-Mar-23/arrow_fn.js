// Reverse two string and then append them
const reverseAppend = (str1, str2) => {
	let rev1 = [...str1].reverse();
	let rev2 = [...str2].reverse();

	return rev1.join("") + rev2.join("");
};

let name1 = "MUSKAN";
let name2 = "KAPOOR";

console.log(reverseAppend(name1, name2));