let box = document.querySelector("#root")

function getdata(){
    fetch("https://jsonplaceholder.typicode.com/todos")
       .then((res)=>res.json())
       .then((data)=>{
             showData(data)
             console.log(data)
           })
}

function showData(todo){

   todo.forEach(function(ele,i){
     
    let list = document.createElement("div")
        list.innerHTML=`<label>${ele.title}</label>
                        <input type="checkbox"
        ${ ele.completed?  "checked": ""}>`
       
    
    box.append(list)
   }) 
}