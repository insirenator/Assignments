function speak() {
	return "hello";
}

function decor(fn) {
	function modfn() {
		let result = fn();
		result = result.toUpperCase();
		return result;
	}

	return modfn;
}

//----------------------------------

console.log(speak());

let shout = decor(speak);

console.log(shout());