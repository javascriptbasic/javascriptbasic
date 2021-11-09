let ceolist = [
    {name:"Larry Page", age:23, ceo:true},
    {name:"Tim Cook", age:40, ceo:true},
    {name:"Elon Musk", age:55, ceo:true}
]

let data = ceolist.map((ceo)=> {
    return ceo.name
})

console.log(data);

//[ 'Larry Page', 'Tim Cook', 'Elon Musk' ] 그럼 ceo ture만 빼고 출력하고 싶으면 어떻게 해야할까?


