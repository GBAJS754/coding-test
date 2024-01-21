function solution(participant, completion) {
    let answer;
    const map = new Map();
    
    participant.forEach((p, index)=>{
        let b = completion[index];
        
        map.set(p, (map.get(p) || 0)+1)
        map.set(b, (map.get(b) || 0)-1)
    })

    map.forEach((key, value)=>{
        if(key>0){
            answer = value
        }
    })
 
    return answer
}