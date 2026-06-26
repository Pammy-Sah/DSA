class Solution {
    public void moveZeroes(int[] arr) {
        int x=0;
        int n=arr.length;
        for(int i=0;i<n;i++){
            if(arr[i]!=0){
                arr[x]=arr[i];
                x++;
            }
        }
        for(int i=x;i<n;i++){
            arr[i]=0;
        }
    }
}