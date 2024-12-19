// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.

// If there is no index that would make this happen, return -1.

function findEvenIndex(arr) {
	for (let i = 0; i < arr.length; i++) {
		let leftSum = 0;
		let rightSum = 0;
		for (let j = 0; j < i; j++) leftSum += arr[j];
		for (let k = i + 1; k < arr.length; k++) rightSum += arr[k];
		if (leftSum === rightSum) return i;
	}
	return -1;
}

console.log("test1: ", findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log("test2: ", findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log("test3: ", findEvenIndex([20, 10, -80, 10, 10, 15, 35]));
