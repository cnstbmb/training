function twoSumv2(nums: number[], target: number): number[] {
    const valsIndexObj: { [value: string]: number } = {};
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        valsIndexObj[value] = i;
    }

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        const suspect = target - value;

        if (valsIndexObj.hasOwnProperty(suspect) && valsIndexObj[suspect] !== i) {
            return [i, valsIndexObj[suspect]];
        }
    }

    console.log('No solution');
    return []
};

let result = twoSumv2([1, 2, 3, 4, 5, 6, 7, 8, 9], 5);
console.log(result);
result = twoSumv2([7, 1, 3, 2, 4], 6);
console.log(result);
result = twoSumv2([3, 3], 6);
console.log(result);
result = twoSumv2([2,7,11,15], 9);
console.log(result);