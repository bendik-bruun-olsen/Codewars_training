// Given an array X of positive integers, its elements are to be transformed by running the following operation on them as many times as required:

// if X[i] > X[j] then X[i] = X[i] - X[j]

// When no more transformations are possible, return its sum ("smallest possible sum").

console.time("timing function");

function solution(numbers) {
	const gcd = (a, b) => {
		while (b !== 0) {
			let temp = b;
			b = a % b;
			a = temp;
		}
		return a;
	};
	let overallGCD = numbers[0];
	for (let i = 0; i < numbers.length; i++) {
		overallGCD = gcd(overallGCD, numbers[i]);
		if (overallGCD === 1) break;
	}
	return overallGCD * numbers.length;
}

const smallArr = [6, 9, 21];
const largeArr = Array.from({ length: 1000 }, () =>
	Math.floor(Math.random() * 100)
);

console.log(solution(largeArr));
console.timeEnd("timing function");
