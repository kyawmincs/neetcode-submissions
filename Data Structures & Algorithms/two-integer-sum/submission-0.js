class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // Take an element compared with rest of array  
            // If target found
                // return element index and current array element's index
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if ( (nums[i] + nums[j]) === target) {
                    return [i,j];
                }
            }
        }
    }
}
