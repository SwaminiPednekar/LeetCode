/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    for(let i = 0; i < nums.length; i++){
        result[0] = i;
        let temp = nums.indexOf(target - nums[i], i+1);
        console.log(temp);
        if(temp !== -1){
            result[1] = temp;
            break;
        }
    }
    console.log(result);
    return result;
    
};