function solution(strings, n) {
	// 응답속도 빠름
	// return strings.sort((a, b) => {
	//     var sa = a[n];
	//     var sb = b[n];
	//     if (a[n] === b[n]) {
	//         sa = a;
	//         sb = b;
	//     }
	//     return sa < sb ? -1 : 1;
	// });
	
	// 코드는 간결하나 응답속도가 느림
	return strings.sort((a, b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));
}