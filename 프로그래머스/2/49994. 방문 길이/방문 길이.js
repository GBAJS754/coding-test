function solution(dirs) {
    const obj = {
        "U" : [0,1],
        "L" : [-1,0],
        "R" : [1,0],
        "D" : [0,-1]
    }
    
    let curr =[0,0]
    const answer = new Set()
    for(let i=0; i<dirs.length; i++){
      const nx = curr[0] + obj[dirs[i]][0]
      const ny = curr[1] + obj[dirs[i]][1]
      
      if(nx > 5 || nx < -5 || ny >5 || ny <-5) continue;
        answer.add(`${curr[0]}${curr[1]}${nx}${ny}`)
        answer.add(`${nx}${ny}${curr[0]}${curr[1]}`)   
      curr = [nx,ny] 
    }
    return answer.size/2
}