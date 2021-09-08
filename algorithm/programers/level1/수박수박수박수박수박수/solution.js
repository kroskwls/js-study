function solution(n) {
	var result = "";

	for (var i = 0; i < parseInt(n / 2); i++) {
		result += "수박";
	}
	if (!Number.isInteger(n / 2)) result += "수";

	return result;
}