/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
    // Case 1: both are null
    if (p === null && q === null) return true;

    // Case 2: one is null
    if (p === null || q === null) return false;

    // Case 3: values differ
    if (p.val !== q.val) return false;

    // Check left and right subtree
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}