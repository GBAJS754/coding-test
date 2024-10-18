function solution(n) {
    const dp = [];
    dp[0] = 0 % 1000000007
    dp[1] = 1 % 1000000007
    dp[2] = 2 % 1000000007
    dp[3] = 3 % 1000000007
    
    for(let i=4; i<=n; i++){
        dp[i] = (dp[i-1] +dp[i-2]) % 1000000007
    }
    
    return dp[n] 
}