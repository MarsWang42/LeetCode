/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    return helper(root, sum, 0);
};

var helper = function(root, sum, currentSum) {
    if (root === null) return false;
    currentSum += root.val;
    if (root.left === null && root.right === null && currentSum === sum) return true;
    else return helper(root.left, sum, currentSum) || helper(root.right, sum, currentSum);
}
