var twoSum = function(nums, target) {
    var arr = []
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if((nums[i]+nums[j]) === target){
                console.log(true)
                arr.push(i);
                arr.push(j);
            }
        }
    }
    return arr;
};