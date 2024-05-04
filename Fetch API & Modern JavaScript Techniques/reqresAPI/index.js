let root=document.getElementById("root")

let btn=document.getElementById("fetch");


function present(){
    
    let some= fetch(`https://reqres.in/api/users`)
    .then( (resp)=>{
       return  response=resp.json()
    }).then((response)=>{
 
       let responsed=response.data;
          Showdata(responsed)
    }).catch((err)=>{
        console.log(err)
    })
}


function Showdata(responsed){
   
let narr=responsed.forEach((ele)=>{
    let div=document.createElement("div")
    div.id="box"

let name= document.createElement("h1")
name.textContent=`${ele.first_name}   ${ele.last_name}`
let email= document.createElement("h2")
email.textContent=ele.email
let img= document.createElement("img")
img.src=ele.avatar;

div.append(img,name,email)
root.append(div)


})

}




btn.addEventListener("click",present)