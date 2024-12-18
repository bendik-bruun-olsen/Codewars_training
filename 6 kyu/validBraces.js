// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

function validBraces(braces) {
	let stack = [];
	const bracesMap = { "{": "}", "[": "]", "(": ")" };

	for (const char of braces) {
		if (Object.keys(bracesMap).includes(char)) {
			stack.push(char);
		} else if (Object.values(bracesMap).includes(char)) {
			if (stack.length === 0 || bracesMap[stack.pop()] !== char) return false;
		}
	}
	return stack.length === 0;
}

console.log("test1: ", validBraces("([{}])"));
console.log("test2: ", validBraces("[({})](]"));
