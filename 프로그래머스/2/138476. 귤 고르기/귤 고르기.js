function solution(k, tangerine) {
    tangerine.sort((a,b)=>a-b)
    const map = new Map()
    const arr = []
    let answer = 0;
    for(let i=0; i<tangerine.length; i++){
        const n = tangerine[i]
        map.set(n, map.get(n)+1 || 1)
    }
    
    for(let [key, value] of map){
        arr.push(value)
    }
    
    arr.sort((a,b)=>b-a)
    
    for(let i=0; i<arr.length; i++){
        if(k <= 0) break;
        else{
        k-=arr[i]
        answer++   
        }
    }
    return answer
}