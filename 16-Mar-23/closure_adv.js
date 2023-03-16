
// Closure
let user = function() {
	let name = 'john',
		age  = 10,
		salary = 1000;

	let obj = {
		info: () => `Name : ${name}\nAge : ${age}`,
		bonus: (b) => salary * (b/100),
		increment : (i) => { salary += i },
	};

	return obj;
}();


console.log(user.info());
console.log(user.bonus(20));
user.increment(1000);
console.log(user.bonus(20));


// console.log(name); // Error