function solution(s) {
	s = s.toLowerCase();
	return s.split('p').length - 1 === s.split('y').length - 1;
}