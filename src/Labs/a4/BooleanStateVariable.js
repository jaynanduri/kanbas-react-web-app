import React, {useState} from "react";

function BooleanStateVariable() {
    const [done, setDone] = useState(true);

    return(
        <>
            <h2>Boolean State Variables</h2>
            <p>{done ? "Done": "Not done"}</p>
            <label className={"form-control"}>
                <input type="checkbox" checked={done} onChange={() => setDone(!done)}/>
                Done
            </label>
            {done && <div className={"alert alert-success"}>Yay! you're done</div> }

        </>
    );
}

export default BooleanStateVariable;