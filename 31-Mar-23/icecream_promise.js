let stocks = {
	fruits: ["strawberry", "grapes", "banana", "apple"],
	liquids: ["water", "ice"],
	holder: ["cone", "cup", "stick"],
	toppings: ["chocolate", "peanuts"]
};

let isShopOpen = false;

let order = (time, work) => {

	return new Promise( (resolve, reject) => {
		if (isShopOpen) {

			setTimeout( ()=> {
				resolve( work() )
			}, time)

		} else {
			reject(console.log('Shop is closed!'));
		}
	});
};

order(2000, () => console.log(`${stocks.fruits[0]}`))

.then(() => {
	return order(0000, () => {
		console.log('Production has started!');
	});
})

.then(() => {
	return order(2000, () => {
		console.log('The fruit has been chopped!');
	});
})

.then(() => {
	return order(1000, () => {
		console.log('Water and Ice was added!');
	});
})

.then(() => {
	return order(1000, () => {
		console.log('Machine has started!');
	});
})

.then(() => {
	return order(2000, () => {
		console.log('Ice-Cream ready!');
	});
})

.catch(()=>{
	console.log("Customer left!");
})

.finally(() => {
	console.log('Day ended, shop closed!');
});