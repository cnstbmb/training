function lengthOfLongestSubstringVer02(s: string): number {
    const sLength: number = s.length;
    const charSequence: {[char: string]: boolean} = {};

    let result = 0;
    let start = 0;
    let end = 0;

    while (start < sLength && end < sLength) {
        const char: string = s[end];

        if (!charSequence[char]) {
            charSequence[char] = true;
            end++;

            result = Math.max(result, end - start);
        } else {
            const charToRemove = s[start];
            delete charSequence[charToRemove]
            start++;
        }
    }
    
    return result;
}