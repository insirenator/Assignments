function addPrefix(prefix, ...words) {
	
	let prefixedWords = [];

	for (let word of words) {
		prefixedWords.push(prefix + word);
	}

	return prefixedWords
}

let prefixedWords = addPrefix("con", "vex", "verse", "cave");

console.table(prefixedWords);