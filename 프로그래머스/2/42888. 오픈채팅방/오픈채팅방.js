function solution(record) {
    let answer = []
    const map = new Map()
    for(let i=0; i<record.length; i++){
        const [action, id, nickname] = record[i].split(" ")
        if(nickname){
            map.set(id, nickname)   
        }    
    }
    
    for(let i=0; i<record.length; i++){
        const [action, id] = record[i].split(" ")
        const nickname = map.get(id)
        if(action === "Enter"){
            answer.push(`${nickname}님이 들어왔습니다.`)
        }else if(action === "Leave"){
            answer.push(`${nickname}님이 나갔습니다.`)
        }
    }
    return answer
}