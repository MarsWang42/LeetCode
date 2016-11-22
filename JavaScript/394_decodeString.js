/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let digit = ["0","1","2","3","4","5","6","7","8","9"],
        stack =[],
        len = s.length;
    for (let i = 0; i < len; i++) {
        let cur = s.charAt(i);
        if (cur !== "]") stack.push(cur);
        else if (cur === "]") {
            let temp = "";
            while (stack.length !== 0) {
                let c = stack.pop();
                if (c !== "[") {
                    temp = c + temp;
                }
                else if (c === "[") {
                    let temp_num = "";
                    while (stack && digit.indexOf(stack[stack.length-1]) !== -1)
                        temp_num = stack.pop() + temp_num;
                    let temp_s = "";
                    for (let j = 0; j < Number(temp_num); j++)
                        temp_s += temp;
                    stack.push(temp_s);
                    break;
                }
            }
        }
    }
    return stack.join("");
};
