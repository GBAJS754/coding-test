function solution(s) {
    s = s.replaceAll("{", "[")
    s = s.replaceAll("}", "]")
    s = JSON.parse(s)
    s.sort((a,b)=>a.length - b.length)
    
    const set = new Set()
    for(let i=0; i<s.length; i++){
        for(let j=0; j<s[i].length; j++){
            set.add(s[i][j])
        }
    }
    
    return [...set]
}