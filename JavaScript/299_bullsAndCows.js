/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let s = secret.split(""),
        g = guess.split(""),
        n = s.length,
        cows = 0,
        bulls = 0,
        nums = [0,0,0,0,0,0,0,0,0,0]
    for (let i = 0; i < n; i++) {
        if (s[i] === g[i]) bulls++;
        else {
            if (nums[g[i]]++ < 0) cows++;
            if (nums[s[i]]-- > 0) cows++;
        }
    }
    return bulls + "A" + cows + "B";
};
