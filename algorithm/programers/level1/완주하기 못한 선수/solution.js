function solution(participant, completion) {
	var hParticipant = [];
	participant.forEach(p => hParticipant[p] = hParticipant[p] ? hParticipant[p] + 1 : 1);
	completion.forEach(p => hParticipant[p] = hParticipant[p] - 1);
	for (var name in hParticipant) {
		if (hParticipant[name] === 1) return name;
	}
}