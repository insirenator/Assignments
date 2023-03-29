function main() {
	let a = 1;
	console.log(a)
	return function() {
		let a = 2;
		console.log(a);
	};
}

let fn = main();
fn();