function solution(order) {
    // 보조 컨테이너 => 맨앞의 상자만 뺄수있음(가장 마지막에 보관한 상자부터) => LIFO
    let idx =0;
    const arr = []
    for(let i=1; i<=order.length; i++){
        if(i===order[idx]) idx++
        else arr.push(i)
        
        while(arr.length > 0 && arr[arr.length-1] === order[idx]){
                arr.pop()
                idx++
        }
     
    }
    return idx
}