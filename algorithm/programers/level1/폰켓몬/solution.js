function solution(nums) {
	var p = nums.length / 2;
	var d = new Set(nums).size;

	return p < d ? p : d;
}