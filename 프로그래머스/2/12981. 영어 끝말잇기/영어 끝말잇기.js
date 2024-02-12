function solution(n, words) {
    const arr = []
    const answer = [0,0]
    for(let i=0; i<words.length; i++){
        const k = words[i]
        const str = arr[arr.length-1]
        const isSameLast = str && str[str.length-1] !== k[0]
        if(isSameLast || arr.includes( k)){
            answer[0]=i%n+1;
            answer[1]=Math.floor(i/n+1);
            break;
        }
        arr.push(k)
    }
    return answer
}