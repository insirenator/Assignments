// Calculates the frequency of each character
// in a string
function countFreq(str) {
	let freqMap = new Map();

	for (const ch of str) {
		if (freqMap.has(ch))
			freqMap.set(ch, freqMap.get(ch) + 1);
		else
			freqMap.set(ch, 1);
	}

	return freqMap;
}

let str = "My Name is Shakeeb Arsalaan";

const freqMap = countFreq(str);

console.log(freqMap);