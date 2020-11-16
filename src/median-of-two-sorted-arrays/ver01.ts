function findMedianSortedArraysv1(nums1: number[], nums2: number[]): number {
    let nums1Lenght = nums1.length;
    let nums2Lenght = nums2.length;

    if (nums1Lenght > nums2Lenght) {
        const tempArr = nums1;
        nums1 = nums2;
        nums2 = tempArr;

        const tempLen = nums1Lenght;
        nums1Lenght = nums2Lenght;
        nums2Lenght = tempLen;
    }

    let iMin = 0;
    let iMax = nums1Lenght;
    const halfLength = Math.floor((nums1Lenght + nums2Lenght + 1) / 2);

    while (iMin <= iMax) {
        const i = Math.floor((iMin + iMax) / 2);
        const j = halfLength - i;

        if (i < iMax && nums2[j - 1] > nums1[i]) {  
            iMin = i + 1;
        } else if (i > iMin && nums1[i - 1] > nums2[j]) {
            iMax = i - 1;
        } else {
            let maxLeft = 0;
            if (i === 0) {
                maxLeft = nums2[j - 1];
            } else if (j === 0) {
                maxLeft = nums1[i - 1];
            } else {
                maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
            }

            if ((nums1Lenght + nums2Lenght) % 2 === 1) {
                return maxLeft;
            }

            let minRight = 0;
            if (i === nums1Lenght) {
                minRight = nums2[j]
            } else if (j === nums2Lenght) {
                minRight = nums1[i];
            } else {
                minRight = Math.min(nums2[j], nums1[i]);
            }

            return (maxLeft + minRight) / 2;
        }
    }

    return 0;
};
