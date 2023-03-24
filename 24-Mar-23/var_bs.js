for(let i = 0; i < 3; i++) {
	setTimeout(() => console.log(i), 1000);
}

for(var i = 0; i < 3; i++) {
	setTimeout(() => console.log(i**2), 1000);
}