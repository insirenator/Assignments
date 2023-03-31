let stocks = {
	fruits: ["strawberry", "grapes", "banana", "apple"],
	liquids: ["water", "ice"],
	holder: ["cone", "cup", "stick"],
	toppings: ["chocolate", "peanuts"]
};

let order = (fruit, call_production) => {
	setTimeout(() => {
		console.log(`${stocks.fruits[fruit]} was selected!`);
		call_production();
	}, 2000);
}; 

let production = () => {
	setTimeout(() => {
		console.log('The Production is started!');

		setTimeout(() => {
			console.log('The fruit has been chopped!');

			setTimeout(() => {
				console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was added!`);

				setTimeout(() => {
					console.log('Machine has started!');

					setTimeout(() => {
						console.log('Ice-Cream ready!');
					}, 3000);
				}, 1000);
			}, 1000);
		}, 2000);
	}, 0000);
};

console.log("hello");
order(1, production);