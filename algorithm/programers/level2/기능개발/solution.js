function solution(progresses, speeds) {
	var result = [];

	var workDay = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
	var cnt = 0;
	for (var i in workDay) {
		if (workDay[i] > 0) {
			workDay = workDay.map(d => d - workDay[i]);
			result.push(1);
		} else {
			result[result.length - 1]++;
		}
	}

	return result;
}