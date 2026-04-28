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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    // store root value
    const value = root.val;

    function check(node) {
        if (node === null) return true;

        // if value mismatch → false
        if (node.val !== value) return false;

        // check left and right
        return check(node.left) && check(node.right);
    }

    return check(root);
};