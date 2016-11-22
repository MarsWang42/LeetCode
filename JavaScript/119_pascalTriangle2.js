/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1];
    let n1 = [];
    let n2 = [1];
    for (let i = 0; i < rowIndex+1; i++) {
        n1 = n2.slice(0);
        n2 = []
        for (let j = 0; j < i+1; j++) {
            if (j === 0 || j === i) n2.push(1);
            else n2.push(n1[j-1] + n1[j])
        }
    }
    return n2;
};
