import java.util.*;

class Solution {

    public List<List<Integer>> threeSum(int[] arr) {

        Arrays.sort(arr);

        List<List<Integer>> ans = new ArrayList<>();

        for (int i = 0; i < arr.length - 2; i++) {

            // Duplicate arr[i] skip
            if (i > 0 && arr[i] == arr[i - 1]) {
                continue;
            }

            twoSum(arr, i, ans);
        }

        return ans;
    }

    public void twoSum(int[] arr, int x, List<List<Integer>> ans) {

        int n = arr.length;

        int i = x + 1;
        int j = n - 1;

        while (i < j) {

            int sum = arr[i] + arr[j] + arr[x];

            if (sum > 0) {
                j--;
            }
            else if (sum < 0) {
                i++;
            }
            else {

                ans.add(Arrays.asList(arr[x], arr[i], arr[j]));

                i++;
                j--;

                // Duplicate left values skip
                while (i < j && arr[i] == arr[i - 1]) {
                    i++;
                }

                // Duplicate right values skip
                while (i < j && arr[j] == arr[j + 1]) {
                    j--;
                }
            }
        }
    }
}