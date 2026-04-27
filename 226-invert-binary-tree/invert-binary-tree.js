/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var invertTree = function(root) {
    if (root === null) return null;

    // swap left and right
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    // recursively invert subtrees
    invertTree(root.left);
    invertTree(root.right);

    return root;
};