function solution(numbers, target) {
    const len = numbers.length
    const temp = new Array(len).fill(0)
    let answer = 0;
    const dfs = (L)=>{
        if(L === len){
            let res = 0;
            for(let i=0; i<temp.length; i++){
                if(temp[i] === 1) res+= numbers[i]
                if(temp[i] === 0) res-= numbers[i]
            }
            if(res === target) answer++
            return
        }else{
            temp[L] = 1
            dfs(L+1)
            temp[L] = 0
            dfs(L+1)
        }
    }
    dfs(0)
    
    return answer
}