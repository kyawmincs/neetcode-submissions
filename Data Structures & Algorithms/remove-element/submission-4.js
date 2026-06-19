class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let n = nums.length;
        let i = undefined;

        for (i = 0; i < n; i++) {
            if (nums[i] === val) {
                // Find first non-instance of val and swap
                for (let j = i + 1; j < n; j++) {
                    if (nums[j] !== val) {
                        // Swap 
                        const temp = nums[i];
                        nums[i] = nums[j];
                        nums[j] = temp;
                        break;
                    }
                }
                // If not found until the end of loop, return i as k 
                if (nums[i] === val) {
                    return i;
                }
            }
        }

        return i;
    }
}
