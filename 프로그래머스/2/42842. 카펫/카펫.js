function solution(brown, yellow) {
    var answer = [];
    const sum = brown+yellow
    for(let i=3; i<=Math.sqrt(sum); i++){
        if(sum % i === 0){
            const br = i*2+(sum/i)*2-4
            if(br === brown && sum-yellow === br){
                answer.push(sum/i)
                answer.push(i)
            }
        }
    }
    return answer;
}