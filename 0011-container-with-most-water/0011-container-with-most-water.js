/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let area = 0;
    let lp = 0;
    let rp = height.length-1;
    while(lp<rp){
        let h = height[lp]<height[rp]?height[lp]:height[rp];
        let b = rp - lp;
        if(h*b > area) area = h*b;
        if (height[lp]<=height[rp]) lp++;
        else rp--;
    }
    return area;
};