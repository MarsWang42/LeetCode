/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let cur = root,
        visited = [cur];
    while (visited.length !== 0) {
        while (cur) {
            visited.push(cur);
            cur = cur.left;
        }
        cur = visited.pop();
        k--;
        if (k === 0) return cur.val;
        cur = cur.right;
    }
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let left = countnodes(root.left);
    if (left === k-1) return root.val;
    else if (left > k-1) return kthSmallest(root.left, k);
    else if (left < k-1) return kthSmallest(root.right, k-left-1);
};

var countnodes = function(root) {
    if (root === null) return 0;
    return 1 + countnodes(root.left) + countnodes(root.right);
};
