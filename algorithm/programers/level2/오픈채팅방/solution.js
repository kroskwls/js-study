function solution(record) {
	var result = [];
	var users = {};
	var actions = { Enter: "님이 들어왔습니다.", Leave: "님이 나갔습니다." };

	for (var log of record) {
		var splited = log.split(' ');
		var action = splited[0];
		var uid = splited[1];
		var nickname = splited[2];

		if (action !== "Leave")
			users[uid] = nickname;
	}

	for (var log of record) {
		var splited = log.split(' ');
		var action = splited[0];
		var uid = splited[1];

		if (actions[action]) {
			result.push(`${users[uid]}${actions[action]}`);
		}
	}

	return result;
}