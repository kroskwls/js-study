var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n').filter(s => s !== "").map(n => Number(n));
var size = inputs.shift();

var dp = [inputs[0]];
for (var i = 1; i < size; i++) {
	// i번쨰 잔을 안마시는 경우
	// - 이전 dp(최대 값)과 같음
	var noDrink = (dp[i - 1] ?? 0);
	// i번째 잔을 2잔 연속 중 처음으로 마시는 경우(3잔 연속으로는 마실수 없음)
	// - o x o 순, i - 2번째의 최대값에서 i - 1번째를 안 마시고 i번째를 마셔야함
	var firstDrink = (dp[i - 2] ?? 0) + inputs[i];
	// i번째 잔을 2잔 연속 중 두번째로 마시는 경우(3잔 연속으로는 마실수 없음)
	// - x o o 순, i - 1번째와 i번째를 마시고 i - 2를 안마셔야 함. i - 3번째의 최대값에 i - 1과 i를 더함
	var secondDrink = (dp[i - 3] ?? 0) + inputs[i - 1] + inputs[i];
	dp[i] = Math.max(noDrink, firstDrink, secondDrink);
}
console.log(Math.max(...dp));