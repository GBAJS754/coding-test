function solution(n, k) {
    
    let arr = n.toString(k).split(0)
    
    // 소수 양쪽에 0이 있을 경우
    // 소수 오른쪽,왼쪽에만 0이 있는 경우
    // 양쪽에 아무것도 없는 경우
    let answer =0;
    for(let i=0; i<arr.length; i++){
       if(arr[i] > 1){
            let count =0;
            for(let j=2; j<=Math.sqrt(arr[i]); j++){
                if(arr[i] % j === 0){
                    count++
                }
            }
           if(count === 0) answer++
       }
        
    }
    return answer
}