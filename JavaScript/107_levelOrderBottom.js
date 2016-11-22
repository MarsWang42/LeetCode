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
var levelOrderBottom = function(root) {
    if (root === null) return [];
    let queue = [],
        result = [];
    bfs([root], result);
    return result;
};

var bfs = function(queue, result) {
    if (queue.length === 0) return
    let newQueue = []
    for (let i = 0; i < queue.length; i++) {
        if (queue[i].left !== null)
            newQueue.push(queue[i].left);
        if (queue[i].right !== null)
            newQueue.push(queue[i].right);
    }
    bfs(newQueue, result);
    result.push(queue.map((node) => {return node.val;}));
}
