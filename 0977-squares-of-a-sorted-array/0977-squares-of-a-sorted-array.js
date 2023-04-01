/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // let unsorted =[];
    // for(let i = 0; i<nums.length; i++){
    //     unsorted.push(nums[i]*nums[i]);
    // }
    // let sorted = unsorted.sort(function(a,b){return(a-b)});
    // return sorted;

    const newArray = new Array(nums.length).fill(0);
    let pointerLeft = 0;
    let pointerRight = nums.length-1;
    for(let i=nums.length-1; i>=0; i--){
        const leftSquared = Math.pow(nums[pointerLeft], 2);
        const rightSquared = Math.pow(nums[pointerRight], 2);
        if(leftSquared > rightSquared){
            newArray[i]=leftSquared;
            pointerLeft++;
        }else{
            newArray[i]=rightSquared;
            pointerRight--;
        }
    }
    return newArray;
};