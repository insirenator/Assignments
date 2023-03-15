// Create a French Deck
const cards = [];

for (let suit of ['H', 'C', 'D', 'S']) { // hearts, clubs, diamonds, spades
	for (let value = 1; value <= 13; value++)
		cards.push({suit, value});
}

console.log(cards.length);

// Cards to string
function cardToString(c) {
	suits = {'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660'};
	values = {1: 'A', 11: 'J', 12: 'Q', 13: 'K'};

	for (let i = 2; i <=10; i++)
		values[i] = i;

	return values[c.value] + suits[c.suit];
}

// console.table(cards);

console.log(cards.map(cardToString));