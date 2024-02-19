function solution(n, left, right) {
    const dp =[]
    dp[1] = [[1]]
    dp[2] = [[1,2],[2,2]]
    dp[3] = [[1,2,3], [2,2,3], [3,3,3]]

    for(let i=4; i<=n; i++){
        dp[i] = dp[i-1].map(v=>[...v])
        for(let j=0; j<dp[i].length; j++){
            dp[i][j].push(i)
        }
        dp[i].push(String(i).repeat(4).split("").map(Number))
    }
    
    const answer = dp[n].map((v)=>v.join("")).join("")

    return answer.slice(left,right+1).split("").map(Number)
}