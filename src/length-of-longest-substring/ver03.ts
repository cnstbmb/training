function lengthOfLongestSubstringVer03(s: string): number {
    const sLength: number = s.length;
    const charSequence: {[char: string]: number} = {};

    let result = 0;

    for (let end = 0, start = 0; end < sLength; end++) {
        const char = s[end]
        if (charSequence.hasOwnProperty(char)) {
            start = Math.max(charSequence[char], start);
        }

        result = Math.max(result, end - start + 1 );
        charSequence[char] = end + 1;
    }
    
    return result;
}