import React from "react";
import APIExamples from "./APIExamples";
import IntegratingReactWithAPIs from "./IntegratingReactWithAPIs";

const Assignment5 = () => {
    console.log(process.env);
    return (
        <div className="container">
            <h1>Assignment 5</h1>
            <a
					href={`${process.env.BACKEND_URL}/a5/welcome`}
					className='list-group-item'>
					Welcome to Assignment5
            </a>
            {/*<input type="text" className="form-control w-50" value="Welcome"/>*/}
            {/*<APIExamples/>*/}
            {/*<IntegratingReactWithAPIs/>*/}
        </div>
    );
}

export default Assignment5;