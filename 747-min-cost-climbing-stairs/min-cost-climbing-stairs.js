/**
 * @param {number[]} cost
 * @return {number}
 */
function minCostClimbingStairs(cost) {
    let prev2 = 0; // cost to reach step i-2
    let prev1 = 0; // cost to reach step i-1

    for (let c of cost) {
        let curr = c + Math.min(prev1, prev2);
        prev2 = prev1;
        prev1 = curr;
    }

    return Math.min(prev1, prev2);
}