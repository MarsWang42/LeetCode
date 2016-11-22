/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
    var count = [0,0,0,0,0,0,0,0,0,0];
    for (let i = 0, length = s.length; i < length; i++) {
        switch (s[i]) {
            case "z": count[0]++; break;
            case "w": count[2]++; break;
            case "x": count[6]++; break;
            case "s": count[7]++; break;
            case "u": count[4]++; break;
            case "f": count[5]++; break;
            case "h": count[3]++; break;
            case "g": count[8]++; break;
            case "i": count[9]++; break;
            case "o": count[1]++; break;
        }
    }
    count[7] -= count[6];
    count[5] -= count[4];
    count[3] -= count[8];
    count[9] = count[9] - count[8] - count[5] - count[6];
    count[1] = count[1] - count[0] - count[2] - count[4];
    var string = "";
    for(let i = 0; i < 10; i++) {
        for (let j = 0; j < count[i]; j++) {
            string = string.concat(i);
        }
    }
    return string;
};
