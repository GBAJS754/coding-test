function solution(participant, completion) {
    const a = participant.sort()
    const b = completion.sort()
    
    const c = a.filter((v, index)=>v !== b[index])
    return c[0]
}