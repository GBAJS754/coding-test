function solution(cacheSize, cities) {
    // 도시 이름을 검색 => 맛집 게시물들 
    // 캐시 크기에 따른 실행시간 측정 프로그램
    // ..? 이거 맞나요??ㅋㅋ 넘 불친절하잖아~
    // LRU 교체알고리즘을 사용 => 가장 최근에 사용된 거는 유지하고, 오래된건 삭제하는 알고리즘
    // 캐시되었을 경우 실행 시간 +1
    // 캐시되지않을 경우 실행 시간 +5
    // 대소문자는 구분하지 않는다.
    
    // Map 사용? 
    // Jeju => 1
    // ㄴㄴ 가장 최근에 사용됐음을 어떻게 알지?
    // Map보다는 다른 방법을 사용하는게 좋을듯..?
    // 알던 cache = [] 배열로 관리하고
    // Jeju, Pangyo, Seoul
    // 걍 가장 오래된거 순으로 쌓이게 하면 되지않을까? push, pop사용하면 될듯...

    
    let cache = []
    let time = 0;
    
    if(cacheSize === 0){
        time = cities.length * 5
    }else{
    for(let i=0; i<cities.length; i++){
        const city = cities[i]
        if(i < cacheSize){
            time += cache.includes(city.toLowerCase()) ? 1 : 5
            cache.push(city.toLowerCase())
        }else{
            if(cache.includes(city.toLowerCase())){
                // 캐시된게 있을 경우
                // city에 해당되는 값을 맨 뒤로 빼주기
                cache.splice(cache.indexOf(city.toLowerCase()),1)
                cache.push(city.toLowerCase())
                time+=1
            }else{
                // 캐시된게 없을 경우
                // 가장 오래된거 삭제 후 새로운 값 추가
                cache.shift();
                cache.push(city.toLowerCase())
                time+=5
            }
        }
    }    
    }
    

    return time
    
}