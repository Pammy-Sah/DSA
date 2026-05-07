/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let result = "1";

    for (let i = 2; i <= n; i++) {
        let temp = "";
        let count = 1;

        for (let j = 0; j < result.length; j++) {
            
            // Count same consecutive characters
            while (j + 1 < result.length && result[j] === result[j + 1]) {
                count++;
                j++;
            }

            // Append count + character
            temp += count + result[j];

            // Reset count
            count = 1;
        }

        result = temp;
    }

    return result;
};