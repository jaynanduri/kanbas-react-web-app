import {Route, Routes} from "react-router";
import Add from "./Add";
import {Link} from "react-router-dom";

function PathParameters() {
    return (
        <>
            <h2>Path Parameters</h2>
            <Link to="/Labs/a3/add/1/2">1 + 2</Link><br/>
            <Link to="/Labs/a3/add/3/4">3 + 4</Link>
            <Routes>
                <Route path="a3/add/:a/:b" element={<Add/>}></Route>
            </Routes>
        </>
    );
}

export default PathParameters;