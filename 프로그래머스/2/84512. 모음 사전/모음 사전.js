function solution(word) {
    const arr = ['A', 'E', 'I', 'O', 'U']
    const temp =[]
    let count = 0;
    let found = false
    
    const dfs = (L) => {
    if(found) return
    count++
    if(temp.join("") === word){
        found = true
        return
    }else if(L === 5){
        return
    }else{
         for(let i=0; i<arr.length; i++){
             temp.push(arr[i])
             dfs(L+1)
             temp.pop()
         }
     }
    }
    
    dfs(0)
    return count -1
}