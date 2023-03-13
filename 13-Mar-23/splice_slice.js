//Splicing
let lang = ["html", "css", "js", "python"];

console.log(lang);

console.log("Splicing with no removal : ");
lang.splice(2, 0, "c++");
console.log(lang);

console.log("Splicing by removing 1 element : ")
console.log(lang);
lang.splice(2, 1, "golang");
console.log(lang);

console.log("Splicing by removing 2 element : ")
console.log(lang);
lang.splice(2, 2, "php");
console.log(lang);

// Slicing
console.log("-------------------------------------");
let lang0 = ["html", "css", "js", "python", "c++", "go"];
console.log(lang0)
console.log(lang0.slice(1,4));
console.log(lang0.slice(3));
console.log(lang0.slice(-4));
