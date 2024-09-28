function solution(numbers) {

    
    numbers.sort((a,b)=> (String(b)+String(a)) - (String(a)+String(b)))
    
    return numbers.every((v)=>v===0) ? "0" : numbers.join("")

}