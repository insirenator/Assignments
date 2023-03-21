const user1 = {
	name: 'Shakeeb',
	age: 21,
	gender: 'M',
};

const user2 = {
	name: 'Aryan',
	age: 23,
	gender: 'M',
};

function logUser(msg, code) {
	console.log(msg);
	console.log("Name : " + this.name);
	console.log("Age : " + this.age);
	console.log("Gender : " + this.gender);
	console.log(`[code] : ${code}`);
}

logUser.call(user1, "The Logged User is :", 12);
logUser.apply(user2, ["User Info", 9]);