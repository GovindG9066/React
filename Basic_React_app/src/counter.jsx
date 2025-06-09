// const { useState } = require("react")
import { useState } from "react";

export default function counter() {
    const [count,setCount]=useState(0)
    function Inccount() {
        setCount(count+1);
    }
    

    return(
        <div>
            <p>{count}</p>
            <button onClick={Inccount}>CountIncrement</button>
           
        </div>
    );



}