import { useState } from "react";

function Counter() {
  const [COUNT, setCOUNT] = useState(1);



  // function isprime(COUNT){
  //   if(COUNT <=1) return false;
  //   for(let i=2; i<=Math.sqrt(COUNT); i++){
  //     if(COUNT % i === 0) return false;
  //   }
  //   return true;
  // }
  var factor=0;

  function checkprime(){
    for(let i=2; i<=COUNT; i++){
      if(COUNT%i==0){
        factor++;
      }
    }
    if(factor===2){
     return "True"
    }
    return"false"
}
   checkprime();
 
  return (
    <div>
      <h1>Welcome to Counter 2.0</h1>
        <div>
        <button  className="btn1" onClick={() => setCOUNT(COUNT-1)} disabled={COUNT == 0}>-1
      </button>
      <button  className="btn2" onClick={() => setCOUNT(COUNT+1)}>+1</button>
        </div>
      <button onClick={()=>setCOUNT(0)}  className="btn3"> Reset</button>
      <h2>Count :{COUNT}</h2>
      <p>This Number Is: {COUNT % 2 == 0 ? "Even" : "odd"}</p>
      <p>Prime Number : {checkprime()}</p>
    </div>
  );
}


export default Counter;
