function lengthOfLongestSubstring(s: string): number {
    let chars: {[char: string]: boolean | string} = {};
    let length = 0;
    let biggestLength = 0;

    for (let i=0; i < s.length; i++) {
        const char = s[i];

        if (chars[char]) {
                length = 0;
                chars = {};
        }

        chars[char] = true;
        length++;

        if(length > biggestLength) {
            biggestLength = length;
        }
    }

    return biggestLength;
};

const word1 = lengthOfLongestSubstring('abcabcbb');
console.log(word1);
const word2 = lengthOfLongestSubstring('bbbbb');
console.log(word2);
const word3 = lengthOfLongestSubstring('pwwkew');
console.log(word3);
const word4 = lengthOfLongestSubstring(' ');
console.log(word4);
const word5 = lengthOfLongestSubstring('ru');
console.log(word5);
const word6 = lengthOfLongestSubstring('dvdf');
console.log(word6);
