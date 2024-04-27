let box = document.querySelector("#root")
let select= document.querySelector("select")


 
 select.addEventListener("change",handleSelect)
 
 function handleSelect(){
    let value = select.value
   console.log(value)
   getData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=${value}`)
}

function getData(url){

   fetch(url)
   .then((res)=>res.json()) 
   .then((data)=>{
    console.log(data)
    showData(data)
   })
} 
 
function showData(obj){
    box.innerHTML=null
    let data = obj.data
    console.log(data)

    data.forEach(ele=>{

        let card = document.createElement("div")
        card.innerHTML=`<h3>${ele.country}</h3>
                        <p><b>Rank :</b>${ele.Rank}</p>
                        <p><b>population:</b>${ele.population}</p>
                       `
         box.append(card)              
    })
}

getData("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries")