function solution(k, dungeons) {
    const len = dungeons.length
    const temp = []
    const check = new Array(len).fill(0)
    const recursion =(n)=>{
        if(n === len) {
            return
        }
        for(let i=0; i<len; i++){
            if(check[i] === 0){
            check[i] = 1
            temp.push(dungeons[i]) 
            recursion(n+1)
            check[i] = 0
            temp.pop()   
            }
        }
    }
    recursion(0)
}