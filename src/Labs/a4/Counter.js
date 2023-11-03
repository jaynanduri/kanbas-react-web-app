import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(7); // state updates virtual dom and then if the virtual dom is changed, the main dom is updated.

    console.log(count);
    return(
        <>
            <h2>Counter: {count}</h2>
            <button onClick={() =>{setCount(count + 1)}} className={"btn btn-success border"}>Up</button>
            <button onClick={() =>{setCount(count - 1)}} className={"btn btn-danger border"}>Down</button>
        </>
    )
}

export default Counter;