function solution(progresses, speeds) {
    var answer = [];
    const stack = []
    let depoly = 0;
    for(let i=0; i<progresses.length; i++){
        const num = Math.ceil((100 - progresses[i]) /  speeds[i])
        const len = stack.length
        stack.push(num)
        depoly++
        if(stack[len-1] >= num){
            stack.pop()
        }else{
            depoly= 1
        }
        answer.push(depoly)
        if(answer[answer.length -2] < depoly){
            answer.pop();
            answer.pop();
            answer.push(depoly)
        }
    }
    
    return answer


}