// Your task in this Kata is to emulate text justification in monospace font. You will be given a single-lined text and the expected justification width. The longest word will never be greater than this width.

// Here are the rules:

// Use spaces to fill in the gaps between words.
// Each line should contain as many words as possible.
// Use '\n' to separate lines.
// Last line should not terminate in '\n'
// '\n' is not included in the length of a line.
// Gaps between words can't differ by more than one space.
// Lines should end with a word not a space.
// Large gaps go first, then smaller ones ('Lorem--ipsum--dolor--sit-amet,' (2, 2, 2, 1 spaces)).
// Last line should not be justified, use only one space between words.
// Lines with one word do not need gaps ('somelongword\n').

function justify(text, width) {
	const words = text.split(" ");
	let lines = [];
	let currentSentence = [];
	let currentLength = 0;

	const justifyLine = (line) => {
		if (line.length === 1) return line[0];
		let totalSpaces = width - line.reduce((sum, word) => sum + word.length, 0);
		let gaps = line.length - 1;
		let spacesPerGap = Math.floor(totalSpaces / gaps);
		let extraSpacesLeft = totalSpaces % gaps;

		return line
			.map((word, index) => {
				if (index === line.length - 1) return word;
				let spaces = " ".repeat(spacesPerGap + (extraSpacesLeft > 0 ? 1 : 0));
				extraSpacesLeft = Math.max(extraSpacesLeft - 1, 0);
				return word + spaces;
			})
			.join("");
	};

	for (let word of words) {
		if (currentLength + currentSentence.length + word.length > width) {
			lines.push(justifyLine(currentSentence));
			currentSentence = [];
			currentLength = 0;
		}
		currentSentence.push(word);
		currentLength += word.length;
	}
	if (currentSentence.length > 0) {
		lines.push(currentSentence.join(" "));
	}

	return lines.join("\n");
}

const text =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus, massa nec interdum interdum, magna est eleifend risus, et dapibus velit felis accumsan ipsum. Nullam at vestibulum sem, sit amet pellentesque dui. Nullam rhoncus odio erat, ut dapibus eros consequat sit amet. Aliquam iaculis posuere dui commodo laoreet.";

console.log(justify(text, 30));
