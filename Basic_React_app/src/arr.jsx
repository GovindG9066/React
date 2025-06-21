import { useState } from "react";

export default function Arr(){
    let [arr,setarr]=useState(["No Moves"])

    let updateArray=()=>{
        setarr([...arr,"Click to add the array"])
        console.log("Adding in the array");
        
    }

    return(
        <>
            <p>push the element in the array using the state function</p>
            <button onClick={updateArray}>push in arr</button>
            <p>{arr}</p>
        </>
        
    );
}