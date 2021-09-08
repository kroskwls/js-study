function solution(n) {
	return toDecimalFromTernary(toTernaryFromDecimal(n));
}

function toTernaryFromDecimal(n) {
	var ternary = [];

	do {
		ternary.push(n % 3);
	} while (n = Math.floor(n / 3));

	return ternary.reverse();
}

function toDecimalFromTernary(arr) {
	return arr.reduce((a, v, i) => a += v * Math.pow(3, i), 0);
}