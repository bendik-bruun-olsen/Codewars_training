// In this kata you have to write a simple Morse code decoder.

// NOTE: Extra spaces before or after the code have no meaning and should be ignored.

// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

// The Morse code table is preloaded for you as a dictionary, feel free to use it:

// Coffeescript/C++/Go/JavaScript/Julia/PHP/Python/Ruby/TypeScript: MORSE_CODE['.--']

decodeMorse = function (morseCode) {
	return morseCode
		.trim()
		.split("   ")
		.map((word) =>
			word
				.split(" ")
				.map((char) => MORSE_CODE[char])
				.join("")
		)
		.join(" ");
};
