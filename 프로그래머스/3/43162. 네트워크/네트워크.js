function solution(n, computers) {
    // n은 컴퓨터 개수
    // 1 -> 2 -> 3
    
    let answer = 0, visited=Array(n).fill(false)
    
    const dfs = (L)=>{
        visited[L] = true
        for(let i=0; i<n; i++){
            if(computers[L][i]=== 1 && L !== i && !visited[i]){
                dfs(i)
            }
        }
    }
    
    for(let i=0; i<n; i++){
         if(!visited[i]){
           dfs(i)
           answer++
           }
    } 
    return answer
    

    
    
    
}