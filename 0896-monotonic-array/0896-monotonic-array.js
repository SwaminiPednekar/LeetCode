/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    // for(let i=0; i<nums.length; i++){
    //     if(nums[i]>=nums[i+1] && nums[i+1]>=nums[i+2]){
    //         return true;
    //     }
    //     else if(nums[i]<=nums[i+1] && nums[i+1]<=nums[i+2]){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }
    if(nums[0] < nums[nums.length-1]){
        // monotonic increasing
        for(let i =0; i<nums.length-1; i++){
            if(nums[i]>nums[i+1])
                return false;
        }
    }
    else if(nums[0] > nums[nums.length-1]){
        // monotonic decreasing
        for(let i =0; i<nums.length-1; i++){
            if(nums[i]<nums[i+1])
                return false;
        }
    }
    else {
        // monotonic equal
        for(let i =0; i<nums.length-1; i++){
            if(nums[i] != nums[i+1])
                return false;
        }
    }

    return true;
};