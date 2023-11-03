import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";

import {add} from "./addReducer";

function AddRedux() {
    const [a, setA] = useState(12);
    const [b, setB] = useState(13);

    const {sum} = useSelector((state) => state.addReducer);
    const dispatch = useDispatch();

    return (
        <>
            <h2>Add Redux</h2>
            <h3>{a} + {b} = {sum}</h3>
            <input type={"number"} onChange={(e)=> setA(parseInt(e.target.value))}
                   className={"form-control"}
            />
            <input type={"number"} onChange={(e)=> setB(parseInt(e.target.value))}
                   className={"form-control"}
            />
            <button className={"btn btn-light border"} onClick={() => dispatch(add({a, b}))}>Add Redux</button>
        </>
    );
}

export default AddRedux;