function solution(skill, skill_trees) {
    // console.log("cbd".indexOf("a"))
    let answer = 0;
    
    for(let i=0; i<skill_trees.length; i++){
        let arr = []
        for(let j=0; j<skill_trees[i].length; j++){
            const tree = skill_trees[i][j]
            if(skill.indexOf(tree) > -1){
                arr.push(tree)
            }
        }
        if(arr.every((v, index)=>v===skill[index])) answer++
        
    }
    return answer
}