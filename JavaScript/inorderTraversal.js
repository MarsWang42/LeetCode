/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (root === null) return [];
    let result = [],
        visited = [],
        cur = root;
    while (true) {
        while(cur) {
            visited.push(cur);
            cur = cur.left;
        }
        if (visited.length === 0) break;
        cur = visited.pop();
        result.push(cur.val);
        cur = cur.right;
    }
    return result;
};
