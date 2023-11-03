import React, {useState} from "react";

function ObjectStateVariable() {
    const [person, setPerson] = useState({name:"Peter", age:24});
    // ... before var is similar to array.extend in python
    return (
        <>
            <h2>Object State Variables</h2>
            <pre>{JSON.stringify(person, null, 2)}</pre>
            <input value={person.name} className={"form-control m-1"} onChange={
                (e) => (setPerson({...person, name: e.target.value}))
            }/>
            <input value={person.age} className={"form-control m-1"} onChange={
                (e) => (setPerson({...person, age: parseInt(e.target.value)})
                )
            }/>
        </>
    );
}
export default ObjectStateVariable;