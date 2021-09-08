function solution(arr1, arr2) {
	var result = [];
	for (var i in arr1) {
		for (var k in arr1[i]) {
			if (!result[i]) result[i] = [];
			result[i][k] = arr1[i][k] + arr2[i][k];
		}
	}
	return result;
}