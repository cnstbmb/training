function lengthOfLongestSubstringv1(s: string): number {
    const stringLength = s.length;
    let substrLength = 0;

    for (let i = 0; i < stringLength; i++) {
        for (let j = i + 1; j <= stringLength; j++) {
            if (checkUniq(s, i, j)) {
                substrLength = Math.max(substrLength, j - i);
            }
        }
    }

    return substrLength;
};

function checkUniq(s: string, start: number, end: number): boolean {
    let chars: {[char: string]: number} = {};

    for (let i = start; i < end; i++) {
        const char = s[i];

        if(chars.hasOwnProperty(char)) {
            return false;
        }
        chars[char] = i;
    }

    return true;
}