import { useState } from "react";

export default function counter() {
    const [count,setCount]=useState(0)
    function Inccount() {
        setCount((currentCount)=>{
            return currentCount+1;
        });
        setCount((currentCount)=>{
             return currentCount+1;
        });
       
        
    }
    

    return(
        <div>
            <p>{count}</p>
            <button onClick={Inccount}>CountIncrement</button>
           
        </div>
    );



}