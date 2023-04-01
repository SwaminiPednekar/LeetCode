/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let sum = 0;
    let temp = 0;
    for(let i=0; i<accounts.length; i++)
    {
        sum = 0;
        for(let j=0; j<accounts[i].length; j++)
        {
            sum = sum + accounts[i][j];
        }
        if(sum>temp)
        {
                temp = sum;
        }
    }
    return temp;
};