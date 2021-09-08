function solution(str1, str2) {
	var arr1 = [];
	for (var i = 0; i < str1.length - 1; i++) {
		var unit = str1.substr(i, 2);
		if (/^[a-zA-Z]*$/.test(unit)) arr1.push(unit.toLowerCase());
	}
	var arr2 = [];
	for (var i = 0; i < str2.length - 1; i++) {
		var unit = str2.substr(i, 2);
		if (/^[a-zA-Z]*$/.test(unit)) arr2.push(unit.toLowerCase());
	}

	var intersection = [];
	var tmp = [...arr2];
	for (var i = 0; i < arr1.length; i++) {
		for (var k = 0; k < tmp.length; k++) {
			if (arr1[i] === tmp[k]) {
				tmp.splice(tmp.indexOf(arr1[i]), 1);
				intersection.push(arr1[i]);
				break;
			}
		}
	}

	var tmp1 = [...arr1];
	var tmp2 = [...arr2];
	for (var k = 0; k < intersection.length; k++) {
		var ch = intersection[k];
		for (var i = 0; i < tmp1.length; i++) {
			var idx = tmp1.indexOf(ch);
			if (idx !== -1) {
				tmp1.splice(idx, 1);
				break;
			}
		}
		for (var i = 0; i < tmp2.length; i++) {
			var idx = tmp2.indexOf(ch);
			if (idx !== -1) {
				tmp2.splice(idx, 1);
				break;
			}
		}
	}
	var union = [...tmp1, ...tmp2, ...intersection];

	var jaccard = intersection.length === 0 && union.length === 0 ? 1 : intersection.length / union.length;
	return Math.floor(65536 * jaccard);
}