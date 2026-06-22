/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(arr) {
    let n=arr.length;
    let totalSum=n*(n+1)/2;
    let partialSum=0;
    for(let i=0;i<n;i++){
        partialSum+=arr[i];
    }
    return totalSum-partialSum;
};