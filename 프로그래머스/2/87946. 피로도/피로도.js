function solution(k, dungeons) {
    const len = dungeons.length
    const temp = []
    const check = new Array(len).fill(0)
    let answer = 0;
    const recursion =(n, hp)=>{
        if(n === len) {
            return
        }
        for(let i=0; i<len; i++){
            if(check[i] === 0 && hp >= dungeons[i][0]) {
            check[i] = 1
            temp.push(dungeons[i]) 
            answer = Math.max(answer, temp.length)
            recursion(n+1, hp-dungeons[i][1])
            check[i] = 0
            temp.pop()   
            }
        }
    }
    recursion(0, k)
    return answer
}