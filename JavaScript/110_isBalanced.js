/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root === null) return true;
    if (Math.abs(helper(root.left)-helper(root.right)) > 1) return false;
    return (isBalanced(root.left) && isBalanced(root.right));
};

var helper = function(node) {
    if (node === null) return 0;
    else return 1 + Math.max(helper(node.left), helper(node.right));
};
