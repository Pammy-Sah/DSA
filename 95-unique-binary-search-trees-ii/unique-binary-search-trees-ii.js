/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {

    function build(start, end) {

        // Base case
        if (start > end) {
            return [null];
        }

        let result = [];

        // Try every value as root
        for (let i = start; i <= end; i++) {

            // Generate left and right subtrees
            let leftTrees = build(start, i - 1);
            let rightTrees = build(i + 1, end);

            // Combine all possibilities
            for (let left of leftTrees) {
                for (let right of rightTrees) {

                    let root = new TreeNode(i);

                    root.left = left;
                    root.right = right;

                    result.push(root);
                }
            }
        }

        return result;
    }

    return build(1, n);
};