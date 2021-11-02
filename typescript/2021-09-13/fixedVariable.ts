class Gangsta {
	static totalBullets = 100;
	// static 멤버는 서브 클래스에 공유되지 않음, 복사해서 가져옴
	shoot() {
		Gangsta.totalBullets--;
        console.log(`[G] Bullets left: ${Gangsta.totalBullets}`);
	}
}

class SuperGangsta extends Gangsta {
    shootMany() {
        SuperGangsta.totalBullets--;
        SuperGangsta.totalBullets--;
        console.log(`[SG] Bullets left: ${SuperGangsta.totalBullets}`);
    }
}

const sg = new SuperGangsta();

sg.shootMany(); // prints 98
sg.shoot();     // prints 99
sg.shootMany(); // prints 96
sg.shoot();     // prints 98