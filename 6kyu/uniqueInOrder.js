// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

function uniqueInOrder(iterable) {
	let array = [];
	for (char of iterable) {
		if (array[array.length - 1] === char) continue;
		else array.push(char);
	}
	return array;
}

console.log("test1: ", uniqueInOrder("AAAABBBCCDAABBB"));
console.log("test2: ", uniqueInOrder("ABBCcAD"));
console.log("test3: ", uniqueInOrder([1, 2, 2, 3, 3]));
