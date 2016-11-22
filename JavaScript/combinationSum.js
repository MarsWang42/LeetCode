/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let n = candidates.length,
        hash = new Array(target+1);
    hash[0] = [[]];
    for (let i = 1; i < target+1; i++) {
        hash[i] = [];
    }
    for (let i = 1; i < n+1; i++) {
        for (let j = target; j >= 0; j--){
            let max = Math.floor(j/candidates[i-1]);
            for (let p = 1; p <= max; p++) {
                if (hash[j-p*candidates[i-1]].length !== 0) {
                    for (let solution in hash[j-p*candidates[i-1]]) {
                        let temp = hash[j-p*candidates[i-1]][solution].slice(0);
                        for (let k = 0; k < p; k++) {
                            temp.push(candidates[i-1]);
                        }
                        hash[j].push(temp);
                    }
                }
            }
        }
    }
    return hash[target];
};
