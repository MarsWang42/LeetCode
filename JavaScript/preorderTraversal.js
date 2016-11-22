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
var preorderTraversal = function(root) {
    if (root === null) return [];
    let stack = [root],
        result = [];
    while (stack.length !== 0) {
        let cur = stack.pop();
        result.push(cur.val);
        if (cur.right !== null) stack.push(cur.right);
        if (cur.left !== null) stack.push(cur.left);
    }
    return result;
};
