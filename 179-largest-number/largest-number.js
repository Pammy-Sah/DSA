/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    
    // Convert all numbers to strings
    nums = nums.map(num => num.toString());

    // Custom sorting
    nums.sort((a, b) => {
        return (b + a) - (a + b);
    });

    // Edge case: all zeros
    if (nums[0] === "0") {
        return "0";
    }

    // Join all strings
    return nums.join("");
};