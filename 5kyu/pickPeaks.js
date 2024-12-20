// In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

// The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

// The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

// Also, beware of plateaus !!!

function pickPeaks(arr) {
	let peaks = [];
	let pos = [];
	let plateauStart = null;
	arr.forEach((e, i) => {
		if (i !== 0 && i !== arr.length - 1) {
			if (e > arr[i - 1]) {
				if (e > arr[i + 1]) {
					peaks.push(e);
					pos.push(i);
				} else if (e === arr[i + 1]) {
					plateauStart = i;
				}
			} else if (plateauStart !== null) {
				if (e < arr[i + 1]) {
					plateauStart = null;
				} else if (e > arr[i + 1]) {
					peaks.push(arr[plateauStart]);
					pos.push(plateauStart);
					plateauStart = null;
				}
			}
		}
	});
	return { pos, peaks };
}

console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1]));
