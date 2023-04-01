/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 const reverse = function(nums, start, end){
    while(start<end){
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}
var rotate = function(nums, k) {
    // for(i=0;i<k;i++){
    //     nums.splice(0,0,nums[nums.length-1]);
    //     nums.splice(nums.length-1,1);
    // }
    k = k % nums.length;
    reverse(nums,0,nums.length-1);
    reverse(nums,0,k-1);
    reverse(nums,k,nums.length-1);
}

