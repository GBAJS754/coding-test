function solution(sequence, k) {
    // 투포인트 문제
    let start = 0;
    let sum = 0;
    let line =Number.MAX_SAFE_INTEGER;
    const answer = [0,0]
    
    for(let end=0; end<sequence.length; end++){
        sum+=sequence[end]
        
        while(sum >= k){
            if(sum === k){
                if(line > Math.abs(start-end)){
                    line = Math.abs(start-end)
                    answer[0] = start
                    answer[1] = end
                }
            }
            sum-=sequence[start]
            start++   
        }
    }
    
    return answer
}