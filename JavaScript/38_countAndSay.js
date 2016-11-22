/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let result = 1;
    for (let i = 1; i < n; i++ ) {
        result = helper(result);
    }
    return result.toString();
};

var helper = function(n) {
    let count = 0,
        temp = "",
        result = "";
    n = n.toString().split("");
    for (let i = 0; i < n.length; i++) {
        if (n[i] !== temp) {
            if (temp !== "") result += count+temp;
            temp = n[i];
            count = 1;
        }
        else count++;
    }
    result += count + temp;
    return result;
};
