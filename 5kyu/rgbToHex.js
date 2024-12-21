// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

function rgb(r, g, b) {
	const convertToHex = (input) => {
		const clamped = Math.max(0, Math.min(255, input));
		return clamped.toString(16).padStart(2, 0).toUpperCase();
	};
	return convertToHex(r) + convertToHex(g) + convertToHex(b);
}

console.log(rgb(148, 0, 211));
