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
 * @return {number}
 */
var findTilt = function(root) {
    let totalTilt = 0;

    function dfs(node) {
        if (!node) return 0;

        let leftSum = dfs(node.left);
        let rightSum = dfs(node.right);

        let tilt = Math.abs(leftSum - rightSum);
        totalTilt += tilt;

        return leftSum + rightSum + node.val;
    }

    dfs(root);
    return totalTilt;
};