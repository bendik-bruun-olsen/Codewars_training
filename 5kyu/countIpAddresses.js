// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

function ipsBetween(start, end) {
	const convertIpToInt = (ip) => {
		return ip
			.split(".")
			.map((e, i) => e * 256 ** (3 - i))
			.reduce((acc, curr) => acc + curr, 0);
	};
	return convertIpToInt(end) - convertIpToInt(start);
}

console.log(ipsBetween("10.0.0.0", "10.0.1.0"));
