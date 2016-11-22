/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    num1 = num1.split("");
    num2 = num2.split("");
    let carry = 0,
        sum = 0,
        result = "";
    while(num1.length > 0 && num2.length > 0) {
        sum = Number(num1.pop()) + Number(num2.pop()) + carry;
        carry = sum>=10? 1: 0;
        sum = sum>=10? sum-10: sum;
        result = sum + result;
    }
    while (num1.length > 0) {
        sum = Number(num1.pop())+carry;
        carry = sum>=10? 1: 0;
        sum = sum>=10? sum-10: sum;
        result = sum + result;
    }
    while (num2.length > 0) {
        sum = Number(num2.pop())+carry;
        carry = sum>=10? 1: 0;
        sum = sum>=10? sum-10: sum;
        result = sum + result;
    }
    if(carry === 1) {
        result = "1"+result;
    }
    return result;
};
