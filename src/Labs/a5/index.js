import React from "react";
import APIExamples from "./APIExamples";
import IntegratingReactWithAPIs from "./IntegratingReactWithAPIs";

const Assignment5 = () => {
    console.log(process.env);
    return (
        <div className="container">
            <h1>Assignment 5</h1>
            <a
					href={`${process.env.REACT_APP_BACKEND_URL}/a5/welcome`}
					className='list-group-item'>
					Welcome to Assignment5
            </a>
            <APIExamples/>
            <IntegratingReactWithAPIs/>
        </div>
    );
}

export default Assignment5;