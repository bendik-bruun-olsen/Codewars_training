// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
	const stringArr = message.split("");
	const isLetter = (char) => {
		const regex = /^[a-zA-Z]$/;
		return regex.test(char);
	};
	return message
		.split("")
		.map((e) => {
			const code = e.charCodeAt(0);
			if (code > 64 && code < 91) {
				return String.fromCharCode(((code - 65 + 13) % 26) + 65);
			} else if (code > 96 && code < 123) {
				return String.fromCharCode(((code - 97 + 13) % 26) + 97);
			}
			return e;
		})
		.join("");
}

console.log(rot13("test"));
