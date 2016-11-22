/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let v = [[], [], [], [], [], [], [], [], []],
        h = [[], [], [], [], [], [], [], [], []],
        c = [[[], [], []], [[], [], []], [[], [], []]],
        nums = ['1','2','3','4','5','6','7','8','9'];
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let temp = board[i][j];
            if (temp === '.') continue;
            if (nums.indexOf(temp) !== -1) {
                let x = parseInt(i/3),
                    y = parseInt(j/3);
                if (v[i].indexOf(temp) === -1 &&
                    h[j].indexOf(temp) === -1 &&
                    c[x][y].indexOf(temp) === -1) {
                        v[i].push(temp);
                        h[j].push(temp);
                        c[x][y].push(temp);
                    }
                else return false
            }
        }
    }
    return true;
};
