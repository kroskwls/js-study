function solution(numbers, hand) {
    var result = "";
    var lp = 10; // left position
    var rp = 12; // right position
    var ld = 99; // left distance
    var rd = 99; // right distance
    var uh; // used hand    
    numbers = numbers.map(n => n === 0 ? 11 : n);
    
    for (var i in numbers) {
        var n = numbers[i];
        switch(n) {
            case 1:
            case 4:
            case 7:
                lp = n;
                uh = 'L';
                break;
            case 3:
            case 6:
            case 9:
                rp = n;
                uh = 'R';
                break;
            default: 
                // 손 거리 확인
                ld = checkDistance(n, lp);
                rd = checkDistance(n, rp);
                
                if (ld < rd) { // 왼손이 가까운 경우
                    lp = n;
                    uh = "L";
                } else if (rd < ld) { // 오른손이 가까운 경우
                    rp = n;
                    uh = "R";
                } else { // 거리가 같은 경우
                    if (hand === "right") { // 오른손잡이
                        rp = n;
                        uh = "R";
                    } else { // 왼손잡이
                        lp = n;
                        uh = "L";
                    }
                }
                break;
        }
        
        result += uh;   
    }
    
    return result;
}

function checkDistance(t, p) {
    var m = parseInt((p - t) / 3);
    var k = (p - t) % 3;
    
    return Math.abs(m + k);
}