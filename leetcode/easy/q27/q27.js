var removeElement = function(nums, val) {
    var res = 0;
    for(var i=0; i<nums.length;i++){
        if(nums[i]!==val) nums[res++] = nums[i];
    }
    return res;
};

console.log(removeElement([2, 2, 3, 3], 3));