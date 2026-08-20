/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
   s=s.split("");
   let n =s.length;
   let mid = Math.floor(k/2)
   for(let x=0;x<n;x=x+(2*k)){
    for(let i=0;i<mid;i++){
        let  temp = s[x+i];
        s[x+i]=s[x+k-1-i];
        s[x+k-1-i]=temp;
    }
   }
   return s.join("");

};