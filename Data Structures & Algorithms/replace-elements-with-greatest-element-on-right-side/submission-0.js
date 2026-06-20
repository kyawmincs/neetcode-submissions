class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let curMax;
        let n = arr.length;

        for (let i = 0; i <  n; i++) {
            // find the largest right side array element 
            curMax = -1;
            for (let j = i + 1; j <  n; j++) {
                if (arr[j] > curMax) curMax = arr[j];
            }
            arr[i] = curMax;
        }

        return arr;
    }
}
