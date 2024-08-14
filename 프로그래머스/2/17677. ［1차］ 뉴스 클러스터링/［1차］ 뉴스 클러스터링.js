function solution(str1, str2) {
    // 교집합 min()
    // 합집합 max()
    // 자카드 유사도 j(A,B) = 교집합 / 합집합
    // 문자열 => 두글자씩 끊어서
    // 기타 공백, 숫자, 특수 문자 버림
    // 대소문자 구별 없음
    // 중복을 허용
    str2 = str2.toLowerCase()
    str1 = str1.toLowerCase()
    const s1 = []
    const s2 = []
    for(let i=0; i<str1.length; i++){
        const a = str1[i].charCodeAt()
        const b = str1[i+1] && str1[i+1].charCodeAt()
        
        if(97<=a && 122 >= a && 97<=b && 122 >= b){
            s1.push(str1[i]+str1[i+1])
        }
    }
    for(let i=0; i<str2.length; i++){
        const a = str2[i].charCodeAt()
        const b = str2[i+1] && str2[i+1].charCodeAt()
        
        if(97<=a && 122 >= a && 97<=b && 122 >= b){
            s2.push(str2[i]+str2[i+1])
        }
    }

    let min =0;
    for(let i=0; i<s1.length; i++){
        const n =s2.indexOf(s1[i])
        if(n > -1){
            s2.splice(n,1, "1")
            min++
        }
    }
    const max = s1.length + s2.length - min
    
    const J = min || max ? Math.floor((min / max) * 65536) : 65536
    
    return J
    
    
}