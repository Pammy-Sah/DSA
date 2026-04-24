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
function isBalanced(root) {

    function checkHeight(node) {
        if (node === null) return 0;

        let left = checkHeight(node.left);
        if (left === -1) return -1;

        let right = checkHeight(node.right);
        if (right === -1) return -1;

        // check balance condition
        if (Math.abs(left - right) > 1) return -1;

        // return height
        return Math.max(left, right) + 1;
    }

    return checkHeight(root) !== -1;
}