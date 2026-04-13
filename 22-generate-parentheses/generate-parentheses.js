/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];

    function backtrack(str, open, close) {
        // base case
        if (str.length === 2 * n) {
            result.push(str);
            return;
        }

        // add "("
        if (open < n) {
            backtrack(str + "(", open + 1, close);
        }

        // add ")"
        if (close < open) {
            backtrack(str + ")", open, close + 1);
        }
    }

    backtrack("", 0, 0);
    return result;
};