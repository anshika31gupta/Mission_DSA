/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var maxPathScore = function(grid, k) {
  const m=grid.length;
  const n=grid[0].length;
  const dp=Array.from({length:m},() =>
  Array.from({length:n},()=>
  new Array(k+1).fill(-1)));
  let startcost= grid[0][0]>=1?1:0;
  let startscore= grid[0][0];
  if(startcost<=k){
    dp[0][0][startcost]=startscore;
  }
   for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
        if(i===0 && j===0) continue;

        const cellcost=grid[i][j]>=1?1:0;
        const cellscore=grid[i][j];
        for(let c=0;c<=k;c++){
            if(i>0 && dp[i-1][j][c] !=-1){
         const newcost =c+cellcost;
         const newscore=dp[i-1][j][c]+cellscore;
            if(newcost<=k){
                dp[i][j][newcost]=Math.max(dp[i][j][newcost],newscore);
            }
            }
            if(j>0 && dp[i][j-1][c] !=-1){
                const newCost=c+cellcost;
                const newScore=dp[i][j-1][c]+cellscore;
                if(newCost<=k){
                    dp[i][j][newCost]=Math.max(dp[i][j]    [newCost],newScore);
                }
            }
        }
       
       
    }
    }
    let ans=-1;
    for(let C=0;C<=k;C++){
        if(dp[m-1][n-1][C]!==-1)
        ans=Math.max(ans,dp[m-1][n-1][C]);
    }
    return ans;
   
};
