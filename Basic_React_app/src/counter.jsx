import { useState } from "react";

export default function Counter() {
let [count,setCount]=useState(0);

function IncCount() {
    setCount(count+1)

};
return(
    <div>
        <p>Count-{count}</p>
        <button onClick={IncCount}> Increase Counter </button>
    </div>
);


};