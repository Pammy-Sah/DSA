/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = [];

    function backtrack(start, path) {
        // If combination size becomes k
        if (path.length === k) {
            result.push([...path]);
            return;
        }

        // Generate combinations
        for (let i = start; i <= n; i++) {
            path.push(i);                 // choose
            backtrack(i + 1, path);      // explore
            path.pop();                  // un-choose
        }
    }

    backtrack(1, []);
    return result;
};