import React, {useState} from "react";

function ChildStateComponent({counter, setCounter}){
    return (
        <>
            <h2>Counter {counter}</h2>
            <button onClick={()=>(setCounter(counter + 1))} className={"btn btn-success border"}>Increment</button>
            <button onClick={()=>(setCounter(counter - 1))} className={"btn btn-danger border"}>Decrement</button>
        </>
    );
}

export default ChildStateComponent;