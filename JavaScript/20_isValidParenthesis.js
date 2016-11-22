/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    s = s.split("");
    let p1 = 0,
        p2 = 0,
        p3 = 0,
        p4 = [],
        n = s.length;
    for (let i = 0; i < n; i++) {
        if (s[i] === "(") {
            p1++;
            p4.push(s[i]);
        }
        else if (s[i] === ")") {
            if (--p1 < 0 || p4[p4.length-1] !== "(") {
                return false;
            }
            p4.pop();

        }
        else if (s[i] === "[") {
            p2++;
            p4.push(s[i]);
        }
        else if (s[i] === "]") {
            if (--p2 < 0 || p4[p4.length-1] !== "[") {
                return false;
            }
            p4.pop();
        }
        else if (s[i] === "{") {
            p3++;
            p4.push(s[i]);
        }
        else if (s[i] === "}") {
            if (--p3 < 0 || p4[p4.length-1] !== "{") {
                return false;
            }
            p4.pop();
        }
    }
    if (p1 !== 0 || p2 !== 0 || p3 !== 0)
        return false;
    return true;
};
