// Map Method in javascript

let names = ["shakeeb", "aryan", "divjot"];

let NAMES = names.map((name) =>{
	return name.toUpperCase();
});

console.log(names);
console.log(NAMES);

// You can also create a function expression and then pass it to the map()
const cap = (name) => {
	return name.toUpperCase();
};

let NAMES1 = names.map(cap);
console.log(NAMES1);