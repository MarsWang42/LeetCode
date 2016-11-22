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
 * @return {number}
 */
var pathSum = function(root, sum) {
    if (root === null) return 0;
    return totalSum(root, 0, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
};

var totalSum = function(root, pre, sum) {
    if (root === null) return 0;
    let total = pre + root.val;
    return (total === sum) + totalSum(root.left, total, sum) + totalSum(root.right, total, sum);
};
