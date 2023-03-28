// A simple promise

const count = true;

let countValue = new Promise(function(res, rej) {
	if (count)
		res("There is a count value.");
	else
		rej("There is no count value.");
});

console.log(countValue);

// .then()

let prom = new Promise((resolve, reject) => resolve("Promise Resolved!"));

prom
	.then((result) => console.log(result),	// runs on resolve
			() => console.log("ERROR!"));	// runs on reject
