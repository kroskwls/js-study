function solution(s) {
	if (s.length === 1) return 1;

	var compressLength = [];
	for (var unitSize = 1; unitSize <= s.length / 2; unitSize++) {
		var compressed = '';
		var repeat = 1;

		for (var i = 0; i < s.length; i += unitSize) {
			var unit = s.substring(i, i + unitSize);
			var next = s.substring(i + unitSize, i + unitSize * 2);
			if (unit === next) {
				repeat++;
			} else {
				if (repeat === 1) {
					compressed = compressed + unit;
				} else {
					compressed = compressed + repeat + unit;
				}
				repeat = 1;
			}
		}
		compressLength.push(compressed.length);
	}

	return Math.min(...compressLength);
}