// class Solution {
//     public int[] twoSum(int[] arr, int target) {
//         for(int i=0;i<arr.length;i++){
//             for(int j=i+1;j<arr.length;j++){
//                 if(arr[i]+arr[j]==target){
//                     return new int[]{i, j};
//                 }
//             }
//         }
//         return new int[]{};
//     }
// }


class Solution{
    public int[] twoSum(int[] arr,int target){
        HashMap<Integer,Integer> map = new HashMap<>();
        int n = arr.length;
        for(int i =0;i<n;i++){
            map.put(arr[i],i);
        }
        for(int i=0;i<n;i++){
            int curr = target - arr[i];
            if(map.containsKey(curr) && map.get(curr)!=i){
                return new int[] {i,map.get(curr)};
            }
        }
        return null;
    }
}