function display(a,b,c) {
	console.log(a,b,c);
}

function display_adv(a,b,...c) {
	console.log(a,b,c);
}

display(1,2,3,4,5); // 1,2,3, rest are dropped

display_adv(1,2,3,4,5); // 1,2,[3,4,5] // rest parameters