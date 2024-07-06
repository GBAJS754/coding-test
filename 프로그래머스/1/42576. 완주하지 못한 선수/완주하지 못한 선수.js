function solution(participant, completion) {
    let answer = 0;
    const map = new Map()
    participant.forEach((v)=>{
        map.set(v,map.get(v)+1 || 1)
    })
    completion.forEach((v)=>{
        map.set(v,map.get(v)-1)
    })
    for([key,value] of map){
        if(value !==0 ){
            answer = key
        }
    }
    
    return answer
}