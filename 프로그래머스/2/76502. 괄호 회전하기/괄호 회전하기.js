function solution(s) {
    const arr = s.split("")
    let answer = 0;
    for(let i=0; i<arr.length; i++){
        const stack = []
        for(let j=0; j<arr.length; j++){
            const len =stack.length
            if(arr[j] === ")" && stack[len-1] === "("){
                stack.pop()
            }else if(arr[j] === "}" && stack[len-1] === "{"){
                stack.pop()
            }else if(arr[j] === "]" && stack[len-1] === "["){
                stack.pop()
            }else{
                stack.push(arr[j])
            }
        }
        arr.push(arr.shift())
        if(!stack.length) answer++   
    }
    
    return answer
}