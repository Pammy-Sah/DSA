/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let L=0;
    let R=0;
    let count=0;
    for(let i=0;i<s.length;i++){
        if(s[i]=="R"){
            ++R;
        }else{
            ++L;
        }
        if(R==L){
            ++count;
            L=0;
            R=0;
            
        }
    }
    return count;
};