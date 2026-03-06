/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLastWord = function(s) {
//   let n=s.length-1;
//   let count=0;
//   while(n>=0){
//     if(s[n]!=" "){
//         ++count;
//     }
//     else if(count>0){
//         break;
//     }
//     --n;
//   }
//   return count;
// };

// approach 2..
var lengthOfLastWord=function(s){
    s=s.trim();
    s=s.split(" ");
    return s[s.length-1].length;
};