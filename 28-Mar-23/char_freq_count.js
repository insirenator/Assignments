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

// Sorts a Map
function sortMap(map) {
	let mapEntries = [...map.entries()];
	mapEntries.sort((entry1, entry2) => {
		return entry2[1] - entry1[1];
	});

	return new Map(mapEntries);
}

let str = "My Name is Shakeeb Arsalaan";

let freqMap = countFreq(str);

console.log(freqMap);
freqMap = sortMap(freqMap);
console.log(freqMap);