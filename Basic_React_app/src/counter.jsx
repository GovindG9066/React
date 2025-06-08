import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    function IncCounter() {
        setCount(count + 1);
    }

    return (
        <div>
            <p>count= {count}</p>
            <button onClick={IncCounter}>Click me to increase count</button>
        </div>
    );
}