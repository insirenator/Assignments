const fs = require('fs');

// Get Data
function getData(fileName) {
	return new Promise((resolve, reject) => {
		try {
			const data = fs.readFileSync(fileName, 'utf-8', (err) => {
				if (err)
					throw err
			});
			resolve(data);
		} catch(err) {
			reject(new Error(err));
		}
	});
}

// Separate Words
function separateWords(data) {
	return data.split(' ');
}

// Testing
getData("testFile.txt").then(data => data.toUpperCase()) 	// Turn to Uppercase
						.then(DATA => separateWords(DATA))	// Separate Words
						.then(arr => console.log(arr))		// Display Words
						.catch(err => console.log(err))
						.finally(() => console.log("TASK ENDED."));