class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxChain = 0;
        let curChain = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                curChain++;
                maxChain = (curChain > maxChain) ? curChain : maxChain;
            } else {
                curChain = 0;
            }
        }

        return maxChain;
    }
}
 