let arr = [1,2,3,4,5];

// Convert into comma separated string.
console.log(arr.toString());

//join() method
console.log(arr.join("-"));

// popping and pushing

let popped = arr.pop(); // Return popped value
console.log(arr);
console.log("Popped Value = ", popped);

let newLen = arr.push(4); // Returns new length
console.log(arr);

// Shift and Unshift
let shifted = arr.shift(); // Returns the shifted value
console.log(shifted);
console.log(arr);

arr.unshift(0);
console.log(arr);

// Concatenation
let a1 = [1,2,3];
let a2 = [6,7,8];
let a3 = [9,4,3];

let A1 = a1.concat(a2);
let A2 = a1.concat(a2, a3);
let A3 = a1.concat(a1, a2, a3);

console.log(A1);
console.log(A2);
console.log(A3);