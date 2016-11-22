/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
        if (num === 0) return [0];
        if (num === 1) return [0, 1];
        let ans = [0];
        for (let i = 0; i < num; i++)
            ans.push(0);
        ans[1] = 1;
        let binary_size = 2;
        let lowerbound = 2;
        let upperbound = lowerbound * 2;
        while (upperbound <= num+1) {
            for(let i = 0; i < binary_size; i++)
                ans[lowerbound+i] = ans[i] + 1;
            binary_size *= 2;
            lowerbound *= 2;
            upperbound *= 2;
        }
        for (let j = lowerbound; j < num+1; j++)
            ans[j] = ans[j-lowerbound] + 1;
        return ans；
};
