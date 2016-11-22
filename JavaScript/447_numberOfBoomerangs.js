/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    let result = 0,
        n = points.length;
    for (let i = 0; i < n; i++) {
        let hash = {};
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                dist = Math.pow((points[i][0] - points[j][0]), 2) +
                    Math.pow((points[i][1] - points[j][1]), 2);
                if (hash[dist] === undefined)
                    hash[dist] = 1;
                else {
                    result += hash[dist];
                    hash[dist]++;
                }
            }
        }
    }
    return result*2;
};
