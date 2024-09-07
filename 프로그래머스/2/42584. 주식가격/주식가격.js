function solution(prices) {
    // 가격이 떨어지지 않은 기간??
    // 문제가 왜케 이해가안갖..?
    // 어떤건 간이고 뒤네..
    const answer =[]
    for(let i=0; i<prices.length; i++){
        let n = 0;
        for(let j=i+1; j<prices.length; j++){
           n++
            if(prices[i] > prices[j]){
                break;
            }
        }
        answer.push(n)
    }
    
    return answer
}