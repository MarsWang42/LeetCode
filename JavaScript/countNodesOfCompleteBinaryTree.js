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
var countNodes = function(root) {
    if (root === null) return 0;
    var heightLeft = getHeight(root.left),
        heightRight = getHeight(root.right);
    if (heightLeft === heightRight) return countNodes(root.right) + 2**heightLeft;
    if (heightLeft !== heightRight) return countNodes(root.left) + 2**heightRight;
};

var getHeight = function(root) {
    if (root === null) return 0;
    else return 1 + getHeight(root.left);
}
