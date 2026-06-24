class Solution {
    public int findMaxConsecutiveOnes(int[] arr) {
        int n=arr.length;
        int currCount=0;
        int maxCount=0;
        for(int i=0;i<n;i++){
            if(arr[i]==1){
                currCount++;
            }else{
                maxCount=Math.max(currCount,maxCount);
                currCount=0;
            }
        }
        return Math.max(currCount,maxCount);
    }
}