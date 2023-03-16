// Entries method of objects

let car = {
	name: 'Tesla',
	model: 'S3',
	color: 'black',
	range: 60,
};

let carDetails = Object.entries(car)

console.log(carDetails);

// [[name,tesla],[model, S3]......]