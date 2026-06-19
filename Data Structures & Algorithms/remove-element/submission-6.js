class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let n = nums.length;
        let j = 0;

        for (let i = 0; i < n; i++) {
            if (nums[i] !== val) {
                nums[j] = nums[i];
                j++;
            }
        }

        return j;
    }
}
