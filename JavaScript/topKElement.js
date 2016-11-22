/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hash = {},
        n = nums.length;
    for (let i = 0; i < n; i++) {
        if (hash[nums[i]] === undefined)
            hash[nums[i]] = 0;
        else hash[nums[i]]++;
    }
    var props = Object.keys(hash).map(function(key) {
        return { key: key, value: this[key] };
    }, hash);
    props.sort(function(p1, p2) { return p2.value - p1.value; });
    return props.slice(0, k).map((obj) => Number(obj.key));
};
