class Solution {
    public int maxProduct(int[] arr) {
        int maxProduct = arr[0];
        int minProduct = arr[0];
        int ans = arr[0];

        for(int i=1;i<arr.length;i++){
            int curr = arr[i];
            if(curr<0){
                int temp =maxProduct;
                maxProduct= minProduct;
                minProduct = temp;
            }
            maxProduct = Math.max(curr,maxProduct*curr);
            minProduct = Math.min(curr,minProduct*curr);

            ans = Math.max(ans,maxProduct);
        }
        return ans;
    }
}