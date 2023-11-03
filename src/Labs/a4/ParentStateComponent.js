import React, {useState} from "react";
import ChildStateComponent from "./ChildStateComponent";
function ParentStateComponent(){
    const [counter, setCounter] = useState(123);
    return (
        <>
            <ChildStateComponent counter={counter} setCounter={setCounter}/>
        </>
    );
}

export default ParentStateComponent;