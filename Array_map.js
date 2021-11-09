let 리치S = 
["스티브 잡스" , "빌 게이츠" , "마크 주커버그" ,"일론 머스크" ,"팀쿡"];


let data = 리치S.map((리치,순서)=> {
    return 순서+" "+ 리치
})
console.log(data);


리치S.map((리치,순서) => {
    console.log(순서 +"  "+ 리치);
});