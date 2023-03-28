// Sets hold unique values

let set1 = new Set();	// Empty set

set1.add(1).add("2").add("hello");

console.log(set1);

set1.add(1); // Duplicate is ignored

console.log(set1);

set1.delete("2");

console.log(set1);

console.log(set1.has("hello"));

let set2 = new Set("HELLO");
console.log(set2);

let obj = {
	1: "Shakeeb",
	2: "Aryan",
	3: "Hitesh",
};

let set3 = new Set(Object.values(obj));

set3.add(...[1,2,3]);
console.log(set3);

for(const i of set1)
	console.log(i);
