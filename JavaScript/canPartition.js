/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const length = nums.length;
    let sum = 0;
    for (let i = 0; i < length; i++) {
        sum += nums[i];
    }
    if (sum%2===0) {
        let dp = new Array(sum/2+1);
        dp[0] = true;
        for (let i = 1; i < sum/2+1; i++) {
            dp[i] = false;
        }
        for (let i = 1; i < length+1; i++) {
            for(let j = sum/2+1; j > 0; j--) {
                if (nums[i-1] <= j) {
                    dp[j] = dp[j] || dp[j-nums[i-1]];
                }
                else dp[j] = false;
            }
        }
        return dp[sum/2];
    }
    return false;
};
