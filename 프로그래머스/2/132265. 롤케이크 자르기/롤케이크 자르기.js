function solution(topping) {
    let answer = 0;
    const left = new Set()
    const right = new Set()
    
    const cnt = new Array(10001).fill(0)
    
    topping.map((t)=>{
        left.add(t)
        cnt[t]++
    })
    
    topping.map((t)=>{
        if(cnt[t] > 0) cnt[t]--
        if(cnt[t] === 0) left.delete(t)
        right.add(t)
        
        if(left.size === right.size) answer++
    })
    return answer;
}
