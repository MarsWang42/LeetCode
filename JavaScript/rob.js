/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    if (root === null) return 0;
    if (root.opt !== undefined) return root.opt;
    root.opt = Math.max(rob(root.left) + rob(root.right),
        root.val +
        (root.left? rob(root.left.left)+rob(root.left.right) : 0) +
        (root.right? rob(root.right.left)+rob(root.right.right) : 0))
    return root.opt;
};
