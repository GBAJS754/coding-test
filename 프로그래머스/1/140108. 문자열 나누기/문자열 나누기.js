function solution(s) {
    let x = s[0];
    let xNum = 1
    let other = 0;
    let answer = 0;
    for(let i =1; i<s.length; i++){
        if(xNum === other){
            answer++
            x = s[i+1]
            xNum = other = 0
        }
        if(s[i] === x) xNum++
        else other++
    }
    return answer +1
}