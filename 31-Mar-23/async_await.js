async function kitchen() {
	console.log(' A ');
	console.log(' B ');
	console.log(' C ');

	await setTimeout(() => console.log("Hello"), 2000);

	console.log(' D ');
	console.log(' E ');
	console.log(' F ');
}

kitchen();
console.log("Clean the Dishes");
console.log("Take other Orders");