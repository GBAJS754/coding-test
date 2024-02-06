function solution(numbers) {
    const temp = []
    const check = new Array(numbers.length).fill(0)
    const set = new Set()
    let answer = 0;
    const recursion = (n) =>{
        if(n === numbers.length) return
        for(let i=0; i<numbers.length; i++){
            if(check[i] === 0){
                check[i] = 1
                temp.push(numbers[i])
                set.add(Number(temp.join("")))
                recursion(n+1)
                check[i] = 0   
                temp.pop();
            }
            
        }
        
    }
    
    recursion(0)
    set.forEach((v)=>{
        let cnt = 0;
        for(let i=2; i<=Math.sqrt(v); i++){
            if(v%i === 0){
                cnt++
            }
        }
        if(v!==0 && v!==1 && cnt === 0){
            answer++
        }
    })
    return answer

}