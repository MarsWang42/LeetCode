/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let results = [];
    if (root !== null) bfs(root, "", results);
    return results;
};

var bfs = function(node, path, results) {
    if (node.left === null && node.right === null)
        results.push(path + node.val);
    if(node.left !== null)
        bfs(node.left, path + node.val + "->", results);
    if(node.right !== null)
        bfs(node.right, path + node.val + "->", results);
};
