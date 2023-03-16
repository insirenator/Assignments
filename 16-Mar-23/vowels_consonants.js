function countVowelConsonants(txt) {
	let vowels = "aeiou",
		consonants = "bcdfghjklmnpqrstvwxyz";

	let text = txt.toLowerCase();

	let vowel_count = 0,
		consonant_count = 0;

	for (const ch of text) {
		if (vowels.includes(ch))
			vowel_count++;

		if (consonants.includes(ch))
			consonant_count++;
	}

	console.log(`Sentence   = ${txt}`);
	console.log(`Vowels     = ${vowel_count}`);
	console.log(`Consonants = ${consonant_count}`);
}

countVowelConsonants("How many vowels in a given sentence?");