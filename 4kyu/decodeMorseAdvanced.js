const MORSE_CODE = {
	".-": "A",
	"-...": "B",
	"-.-.": "C",
	"-..": "D",
	".": "E",
	"..-.": "F",
	"--.": "G",
	"....": "H",
	"..": "I",
	".---": "J",
	"-.-": "K",
	".-..": "L",
	"--": "M",
	"-.": "N",
	"---": "O",
	".--.": "P",
	"--.-": "Q",
	".-.": "R",
	"...": "S",
	"-": "T",
	"..-": "U",
	"...-": "V",
	".--": "W",
	"-..-": "X",
	"-.--": "Y",
	"--..": "Z",
	"-----": "0",
	".----": "1",
	"..---": "2",
	"...--": "3",
	"....-": "4",
	".....": "5",
	"-....": "6",
	"--...": "7",
	"---..": "8",
	"----.": "9",
	".-.-.-": ".",
	"--..--": ",",
	"..--..": "?",
	"-.-.--": "!",
	"-....-": "-",
	"-..-.": "/",
	".--.-.": "@",
	"-...-": "=",
	".-.-.": "+",
	"...---...": "SOS",
};

function decodeBits(bits) {
	bits = bits.replace(/^0+|0+$/g, "");
	const groups = bits.match(/(1+|0+)/g);
	const runs = groups.map((run) => run.length);
	const gcd = (a, b) => {
		while (b !== 0) {
			const temp = b;
			b = a % b;
			a = temp;
		}
		return a;
	};
	const timeUnit = runs.reduce((acc, num) => gcd(acc, num));

	return groups
		.map((group) => {
			if (group.startsWith("1")) {
				return group.length === timeUnit ? "." : "-";
			} else {
				if (group.length === timeUnit) return "";
				if (group.length === timeUnit * 3) return " ";
				if (group.length === timeUnit * 7) return "   ";
			}
		})
		.join("");
}

function decodeMorse(morseCode) {
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
}

const testString =
	"00001100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011000";
console.log("decoded: ", decodeMorse(decodeBits(testString)));
