function twoSum(nums: number[], target: number): number[] {
    console.log(`
    nums => ${JSON.stringify(nums, null, 2)}
    target => ${target}
    `);
    for (let i=0; i < nums.length; i++) {
        for (let j= i + 1; j<nums.length; j++) {
            if (nums[i] === target - nums[j]) {
                return [i, j];
            }
        }
    }

    console.log('No solution');
    return []
};

let solution = twoSum([1,2,3,4,5,6,7,8,9], 5);
console.log(solution);
solution = twoSum([7, 1, 3, 2, 4], 6);
console.log(solution);
solution = twoSum([3, 3], 6);
console.log(solution);