/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(arr) {
    let stack=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]=="+" || arr[i]=="-" || arr[i]=="*" || arr[i]=="/"){
            let a=stack.pop();
            let b= stack.pop();
            let ans=eval(`${b}  ${arr[i]}  ${a}`);
            stack.push(Math.trunc(ans));
        }
        else{
            stack.push(arr[i]);
        }
    }
    return Number(stack.pop());
};