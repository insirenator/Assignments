let chars = [..."SHAKEEB"];

console.log(chars);

function sum(a,b,c,d){
	return a+b+c+d;
}

console.log(sum(1,2,3,5)); // 11

let arr = [1,2,3,5];

console.log(sum(...arr)); // 11