// src/components/Stopwatch.jsx

import { useState, useEffect,  } from "react";

function StopWatch() {
  const [count, setCount] = useState(0);
  
          
  useEffect(() => {
    /*Complete the missing code*/
     
    let intervalID = setInterval(()=>{
      setCount(nextcount=>{
        if (nextcount>=10){
          clearInterval(intervalID)
          return nextcount
       } 
       return nextcount+ 1
      }
      )
       
   },1000);
  
    function cleanUp(){
      clearInterval(intervalID)
    }
    return cleanUp
  }, []);
 console.log(count);
  return (
    <div style={{ border: "1px dashed red", padding: "10px", margin: "10px" }}>
      <h1>Stop Watch</h1>
      <h4>{count}</h4>
    </div>
  );
}

export default StopWatch;