function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const concatedArrays = nums1.concat(nums2).sort((a, b) => a - b);
    let result: number;

    const arrIndex = concatedArrays.length;
    if (arrIndex % 2 != 0) {
        const middleIndex = Math.floor(arrIndex / 2);
        result = concatedArrays[middleIndex];
    } else {
        const middleR = arrIndex / 2
        const middleL = middleR - 1;
        result = (concatedArrays[middleR] + concatedArrays[middleL]) / 2
    }

    return result;
};