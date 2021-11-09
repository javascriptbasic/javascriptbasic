let ceolist = [
    {name:"Larry Page", age:23, ceo:true},
    {name:"Tim Cook", age:40, ceo:true},
    {name:"Elon Musk", age:55, ceo:true}
]


let data1 = ceolist.filter((ceo)=> {
    return ceo.age==23
})
console.log(data1);


let data2 = ceolist.filter((ceo)=> {
    return ceo.name.startsWith("T")
})

console.log(data2);


/* 필터가 노션에서의 필터와 완전 동일한 기능이다. */


