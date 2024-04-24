let root= document.getElementById("root")
let sort=document.getElementById("sort")
function fetchh(URL){
let btn= document.getElementById("btn")
btn.innerHTML=null;
sort.innerHTML=null;
sort.style.border="none";
btn.style.border="none"
 fetch(URL)
    .then((resp)=>{
// let resp=res.json();
        return resp.json()
    })
    .then((resp)=>{
        console.log(resp)
        Population(resp)
    }).catch((err)=>{
        console.log(err)
    })



}

 function  Population(resp){
    // console.log(data)
    // console.log(data[9].Rank)
    const productsArray = resp.data; 
    root.innerHTML="";

    let countrypopulation=  productsArray.forEach(ele=>{
        let box= document.createElement("div")
        box.id="box"
let h1=document.createElement("h1")
h1.textContent=`Country:- ${ele.country}`

let h2=document.createElement("h2")
h2.textContent=`population:-${ele.population/100000}M`

let h3=document.createElement("h3")
h3.textContent=`Rank:-${ele.Rank}`

box.append(h1,h2,h3)
    root.append(box)
    })



}  



sort.addEventListener("click" , ()=>{
    fetchh(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=desc`)
})