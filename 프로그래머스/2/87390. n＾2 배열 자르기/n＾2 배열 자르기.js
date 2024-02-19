function solution(n, left, right) {
    const answer = []
    for(let i=left; i<=right; i++){   
        const a = Math.floor(i/n) // 열
        const b = Math.floor(i%n) // 행
        if(a <= b){
            answer.push(b+1)
        }else{
            const c = Math.abs(a-b)
            answer.push(b+c+1)
        }
    }
    return answer
    
}