class Solution {
    public int lengthOfLongestSubstring(String s) {
        int start = 0;
        int len =0;
        HashMap < Character,Integer> map = new HashMap<>();

        for(int end =0;end<s.length();end++){
            char ch = s.charAt(end);
            if(map.containsKey(ch)){
                if(start<=map.get(ch)){
                    start = map.get(ch) +1;
                }
            }
            len = Math.max(len,end-start+1);
            map.put(ch,end);
        }
        return len;
        
    }
}