// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next.

// You need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

function tribonacci(signature, n) {
	if (n === 0) return [];
	if (n <= 3) return signature.slice(0, n);
	let output = [...signature];

	for (let i = signature.length - 1; i < n - 1; i++) {
		let sum = 0;
		for (let j = 0; j < 3; j++) {
			sum += output[i - j];
		}
		output.push(sum);
	}
	return output;
}

console.log(tribonacci([2, 3, 5], 4));

// function tribonacci(signature,n) {
//     const result = signature.slice(0, n);
//     while (result.length < n) {
//       result[result.length] = result.slice(-3).reduce((p,c) => p + c, 0);
//     }
//     return result;
//   }
