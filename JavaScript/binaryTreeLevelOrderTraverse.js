/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) return [];
    let queue = [root],
        result = [];
    while (queue.length !== 0) {
        let temp = [],
            newQueue = [];
        for (let current in queue) {
            if (queue[current].left !== null)
                newQueue.push(queue[current].left);
            if (queue[current].right !== null)
                newQueue.push(queue[current].right);
            temp.push(queue[current].val);
        }
        result.push(temp);
        queue = newQueue;
    }
    return result;
};
