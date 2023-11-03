import {useSelector, useDispatch} from "react-redux";

import {increment, decrement} from "./counterReducer";

function CounterRedux() {
    const {count} = useSelector((state) => state.counterReducer);

    const dispatch = useDispatch();

    return (
        <>
            <h2>Counter Redux</h2>
            <h3>{count}</h3>
            <button onClick={
                () => dispatch(increment())}
                className={"btn btn-success border"}>Increment</button>
            <button onClick={
                () => dispatch(decrement())}
                className={"btn btn-danger border"}>Decrement</button>
        </>
    );

}

export default CounterRedux;