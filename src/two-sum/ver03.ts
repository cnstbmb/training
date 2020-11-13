function twoSumv3(nums: number[], target: number): number[] {
    const valsIndexObj: { [value: string]: number } = {};
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        const suspect = target - value;
        if (valsIndexObj.hasOwnProperty(suspect)) {
            return [i, valsIndexObj[suspect]];
        }

        valsIndexObj[value] = i;
    }

    console.log('No solution');
    return []
};

let result1 = twoSumv3([1, 2, 3, 4, 5, 6, 7, 8, 9], 5);
console.log(result1);
result1 = twoSumv3([7, 1, 3, 2, 4], 6);
console.log(result1);
result1 = twoSumv3([3, 3], 6);
console.log(result1);
result1 = twoSumv3([2,7,11,15], 9);
console.log(result1);