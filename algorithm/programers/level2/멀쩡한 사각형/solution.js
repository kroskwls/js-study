function solution(w, h) {
	if (w === h) return w * w - w;

	var cnt = 0;
	for (var i = 0; i < w; i++) {
		cnt += Math.floor(i * h / w);
	}
	return cnt * 2;
}