/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//  Brute force approach..
var twoSum = function(arr, target) {
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        for(let j=i+1;j<n;j++){
            if(arr[i]+arr[j]==target){
                return [i,j];
            }
        }
    }
};

// optimal solution..
var twoSum = function(arr, target){
    let n=arr.length;
    let map={};
    for(let i=0;i<n;i++){
        map[arr[i]]=i;
    }
    for(let i=0;i<n;i++){
        let pairToFind=target-arr[i];
        if(map[pairToFind] && map[pairToFind]!=i){
            return [i,map[pairToFind]];
        }
    }
}