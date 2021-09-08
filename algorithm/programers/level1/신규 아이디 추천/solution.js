function solution(p) {
	p = p.toLowerCase().replace(/[^0-9a-z-_.]/g, '').replace(/\.+/g, '.');
	p = p.charAt(0) === "\." ? p.substr(1, p.length) : p;
	p = p.charAt(p.length - 1) === "\." ? p.substr(0, p.length - 1) : p;
	p = p.length === 0 ? "a" : p;
	p = p.length > 15 ? p.substr(0, 15) : p;
	p = p.charAt(p.length - 1) === "\." ? p.substr(0, p.length - 1) : p;
	var a = p.length < 3 ? 3 - p.length : 0;
	for (var i = 0; i < a; i++) {
		p += p.charAt(p.length - 1);
	}

	return p;
}