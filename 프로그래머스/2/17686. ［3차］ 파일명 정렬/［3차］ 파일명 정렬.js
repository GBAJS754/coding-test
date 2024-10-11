function solution(files) {
    let newFiles = []
    for(let i=0; i<files.length; i++){
        let [head, number, tail] = ["", "", ""];
        let isTail = false
         for(let j=0; j<files[i].length; j++){
             // head, number, tail 분기
             // number일 경우 => isNaN, 공백
             // number가 아닐 경우
             let isNotNumber = isNaN(files[i][j]) || files[i][j] === " " 
             
             if(isNotNumber){
                 if(isTail){
                     tail+=files[i].slice(j)
                     break;
                 }
                 else head+=files[i][j]
                 
             }else{
                 number+=files[i][j]
                 isTail = true
             }
              
         }
        // console.log(head, "/", number, "/", tail)
        newFiles.push([head,number,tail])
    }
    
    newFiles.sort((a,b)=> a[0].localeCompare(b[0], "en-u-kn-true", {sensitivity: 'base'}) || a[1] - b[1])
    return newFiles.map((v)=>v.join(""))
    
    
}