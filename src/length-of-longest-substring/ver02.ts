function lengthOfLongestSubstringVer02(s: string): number {
    const sLength: number = s.length;
    const charSequence: {[char: string]: number} = {};

    let result = 0;
    let start = 0;
    let end = 0;

    while (start < sLength && end < sLength) {
        const char: string = s[end];

        if (!charSequence.hasOwnProperty(char)) {
            charSequence[char] = end;
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