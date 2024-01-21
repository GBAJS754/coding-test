function solution(nums) {
    const map = new Map();
    nums.map((num, index)=>map.set(num, index))
    
    if(map.size > nums.length/2){
        return nums.length/2
    }else{
        return map.size
    }

}