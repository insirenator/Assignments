// Validate Email
function isValidEmail(email) {
	return (/^[a-zA-Z]+[a-zA-Z0-9\.\-]*@[a-zA-Z]+(\.[a-z]{2,3})$/).test(email);
}

console.log(isValidEmail("abc@gmail.com"));		// true
console.log(isValidEmail("abc12@gmail.com"));	// true
console.log(isValidEmail("ab-c.12@gmail.com")); // true
console.log(isValidEmail("abcgmail.com"));		// false
console.log(isValidEmail("abc@gmal"));			// false
console.log(isValidEmail("abc@.com"));			// false
