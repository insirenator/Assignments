function isObjEmpty(obj) {
	let flag = true;

	for (let prop in obj) {
		flag = false;
	}

	return flag
}

console.log(isObjEmpty({name:'john'}));
console.log(isObjEmpty({name: 'john', age: 19}));
console.log(isObjEmpty({}));