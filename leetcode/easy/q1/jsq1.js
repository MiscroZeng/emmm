// 待优化
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

console.log(twoSum([2,7,11,15,6,4,2], 9));
