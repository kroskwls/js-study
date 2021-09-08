function solution(s, n) {
	var splited = s.split('');
	var value = 0;
	var answer = '';
	for (var i in splited) {
		if (splited[i] !== ' ') {
			console.log(splited[i].charCodeAt(0));
			if (splited[i].charCodeAt(0) >= 97) { //lowerCase
				value = splited[i].charCodeAt(0) + n - 97;
			} else { //uppercase
				value = splited[i].charCodeAt(0) + n - 65;
			}
			
			if (value > 25) {
				answer += String.fromCharCode(splited[i].charCodeAt(0) + value - 26);
			} else {
				answer += String.fromCharCode(splited[i].charCodeAt(0) + value);
			}
		} else {
			answer += ' ';
		}
	}
	return answer;
}