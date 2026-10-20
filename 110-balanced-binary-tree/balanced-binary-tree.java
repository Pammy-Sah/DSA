/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean isBalanced(TreeNode root) {
        int height = maxHeight(root);
        if(height==-1) return false;
        return true;
    }

    public int  maxHeight(TreeNode root){
        if(root==null){
            return 0;
        }

        int leftMaxHeight = maxHeight(root.left);
        int rightMaxHeight = maxHeight(root.right);
        if(leftMaxHeight==-1 || rightMaxHeight==-1){
            return -1;
        }
        if(Math.abs(leftMaxHeight-rightMaxHeight)>1){
            return -1;
        }
        return 1+Math.max(leftMaxHeight,rightMaxHeight);
    }
}