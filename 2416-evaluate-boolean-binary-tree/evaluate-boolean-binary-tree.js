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
var evaluateTree = function(root) {
    // Leaf node
    if (!root.left && !root.right) {
        return root.val === 1;
    }

    // Evaluate children
    const left = evaluateTree(root.left);
    const right = evaluateTree(root.right);

    // Apply operation
    if (root.val === 2) {   // OR
        return left || right;
    } else {                // AND
        return left && right;
    }
};