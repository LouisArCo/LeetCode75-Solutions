var moveZeroes = function(nums) {
    let nonZero = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZero++] = nums[i];
        }
    }

    for (let i = nonZero; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
};