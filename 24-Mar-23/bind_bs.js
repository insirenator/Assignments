let me = {
	name: "shakeeb",
	age: 21,
	specs: true,

	getInfo() {
		console.log(this.name, this.age, this.specs, this.points);
	}
};

let you = {
	name: "whatever",
	age: 0,
	points: 10,
};

let newInfo = me.getInfo.bind(you);

me.getInfo();
newInfo();