class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false;
        }

        let SMap = new Map();
        let TMap = new Map();

        for (let i = 0; i < s.length; i++) {
            if (!SMap.has(s[i])) {
                SMap.set(s[i], 1);
            } else {
                SMap.set(s[i], SMap.get(s[i]) + 1 );
            }
        }

        for (let j = 0; j < t.length; j++) {
            if (!TMap.has(t[j])) {
                TMap.set(t[j], 1);
            } else {
                TMap.set(t[j], TMap.get(t[j]) + 1 );
            }
        }

        for (let i = 0; i < t.length; i++) {
            if ( TMap.get(t[i]) != SMap.get(t[i]) ) {
                return false;
            }
        }

        console.log(SMap);
        console.log(TMap);
        
        return true;
    }
}
