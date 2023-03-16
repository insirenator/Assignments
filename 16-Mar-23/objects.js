let me = {
	name: 'Mohd Shakeeb',
	birthYear: 2002,
	rollno: 12,
	email: 'arsshakeeb149@gmail.com',

	getAge: function() {
		return (new Date().getFullYear()) - this.birthYear;
		//this.getAge;	// undefined
	},
};

console.log(me.getAge());

console.log(me);

delete me.email;

console.log(me);


// for...in
for (const key in me) {
	console.log(`${key} :-> ${me[key]}`);
}

