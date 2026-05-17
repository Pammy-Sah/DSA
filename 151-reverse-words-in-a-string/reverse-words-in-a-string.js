/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // Remove extra spaces and split words
    let words = s.trim().split(/\s+/);

    // Reverse the array of words
    words.reverse();

    // Join with single space
    return words.join(" ");
};