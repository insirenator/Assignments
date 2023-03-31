const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: "Enter Text : ",
});

readline.prompt();
readline.on('line', line => {
	console.log(`You typed : ${line}`);
	readline.prompt();
});