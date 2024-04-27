let box = document.querySelector("#root")


fetch('https://reqres.in/api/users?page=2')
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data)
    showData(data)
  })

function showData(users){

    let data = users.data
    console.log(data)
     console.log(data.avatar)
    data.forEach(ele => {
         
        let card = document.createElement("div")
        card.innerHTML=`<img src=${ele.avatar} alt="avatar">
                        <strong>${ele.first_name} ${ele.last_name}</strong>
                        <p>${ele.email}</p>`
        box.append(card)                
    });

    
}