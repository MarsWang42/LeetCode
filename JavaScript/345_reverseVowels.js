/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    if (s === "") return s;
    let i = 0,
        j = s.length-1,
        vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"],
        temp = "",
        result = "";
    s = s.split("");
    while(i < j) {
        if (vowel.indexOf(s[i]) !== -1
            && vowel.indexOf(s[j]) !== -1){
                temp = s[i];
                s[i] = s[j];
                s[j] = temp;
                i++;
                j--;
            }
        else if (vowel.indexOf(s[i]) !== -1) j--;
        else if (vowel.indexOf(s[j]) !== -1) i++;
        else {
            j--;
            i++;
        }
    }
    for (let i = 0; i < s.length; i++) {
        result += s[i];
    }
    return result;
};
