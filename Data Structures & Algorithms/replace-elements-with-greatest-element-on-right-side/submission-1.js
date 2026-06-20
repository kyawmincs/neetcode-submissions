class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let n = arr.length - 1;
        let maxRight = -1;
        let temp;

        for (let i = n; i > -1; i--) {
            temp = arr[i];
            arr[i] = maxRight;
            maxRight = Math.max(maxRight, temp);
        }

        return arr;
    }
}
