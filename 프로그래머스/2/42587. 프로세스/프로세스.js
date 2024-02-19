function solution(priorities, location) {
    const arr = Array.from({length : priorities.length}, (_,index)=>index)
    const queue = []
    while(priorities.length > 0){
        let max = Math.max(...priorities)
        const n = priorities.shift()
        const m =arr.shift()
        if(n < max){
            priorities.push(n)
            arr.push(m)
        }else if(n === max){
            queue.push(m)
        }
    }
    
    return queue.indexOf(location)+1
}