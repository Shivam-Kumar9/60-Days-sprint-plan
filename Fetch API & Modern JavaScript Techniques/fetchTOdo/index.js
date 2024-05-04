let root=document.getElementById("root")
  
 function present(){

    let some= fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then( (resp)=>{
       return  response=resp.json()
    }).then((response)=>{


          Showdata(response)
    }).catch((err)=>{
        console.log(err)
    })
}


function Showdata(responsed){

let narr=responsed.forEach((ele,i)=>{
    let div=document.createElement("div")
    div.id="box"

let name= document.createElement("h1")
name.textContent=`${ele.title}`
let select=document.createElement("input")  ;  
select.type="checkbox"
select.id="myCheck";
// select.checked;

 if(ele.completed==true){

    select.checked=true;
 }

 div.append( name ,select)
root.append(div)

 })

}


present()
