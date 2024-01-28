function solution(clothes) {
    const map = new Map();
    for(let cloth of clothes){
        map.set(cloth[1], map.get(cloth[1]) || [])
        const arr = map.get(cloth[1])
        arr.push(cloth[0])
    }

    let answer = 1 
    const keys = [...map.keys()]
    for(let i=0; i<keys.length; i++){
        const arr = map.get(keys[i])
        answer *= arr.length+1
    }  
    
    return answer-1
    
}