let regex1 = new RegExp("dog");

const str = "The dog chased the cat. Cat got tired.";

let result = str.match(regex1);
console.log(result[0]); 	// Matched String
console.log(result.length); // Total Matches

result = str.match(/cat/gi); // g->get all, i->case-insensitive
console.log(result);		// All matches
console.log(result[0]); 	// 1st Matched String
console.log(result[1]); 	// 2nd Matched String
console.log(result.length); // Total Matches