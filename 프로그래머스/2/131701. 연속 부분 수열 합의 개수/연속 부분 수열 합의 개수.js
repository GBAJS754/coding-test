function solution(elements) {
    const arr = elements.concat(elements)
    const answer = new Set(elements)
    const recursion = (L)=> {
        if(L > elements.length) return
        if(L===elements.length) return 
        else{
            let lt = 0
            for(let rt =L; rt<arr.length; rt++){
                const sum = arr.slice(lt,rt).reduce((acc,curr)=>acc+curr)
                lt++
                answer.add(sum)
            }
            recursion(L+1)
        }
    }
    recursion(2)
    return answer.size +1
}