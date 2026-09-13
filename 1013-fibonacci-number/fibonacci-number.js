/**
 * @param {number} n
 * @return {number}
 */
//  1. approach...
//  top down approach (memoziation)

//  let dp = { };
// var fib = function(n) {
//     if(n<=1){
//         return n;
//     }
//     if(!dp[n]){
//         dp[n] = fib(n-1)+fib(n-2);
//     }
//     return dp[n];
// };

// 2. bottom up approach  (tabulation)
let dp = [0,1];
var fib = function(n){
for(let i=2;i<=n;i++){
    dp[i]= dp[i-1]+dp[i-2];
}
return dp[n];
}