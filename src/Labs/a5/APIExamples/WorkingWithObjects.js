import React, {useState} from "react";

function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with Express",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });
    const BASE_URL = process.env.REACT_APP_BACKEND_URL;
    const URL = `${BASE_URL}/a5/assignment`;
    return (
        <>
            <h3>Working with Objects</h3>
            <h4>Retrieving Objects</h4>
            <a href="http://localhost:4000/a5/assignment" className="btn btn-primary me-2">Get Assignment</a>
            <h4>Retrieving Properties</h4>
            <a href="http://localhost:4000/a5/assignment/title" className="btn btn-primary me-2">Get Title</a>
            <h4>Modifying Properties</h4>
            <a href={`${URL}/title/${assignment.title}`} className="btn btn-primary me-2 float-end">Update Title</a>
            <input onChange={(e)=>setAssignment({...assignment,
                title: e.target.value})} className="form-control mb-2 w-75" value={assignment.title} type="text"/>
            <a href={`${URL}/score/${assignment.score}`} className="btn btn-primary me-2 float-end">Update Score</a>
            <input onChange={(e)=>setAssignment({...assignment,
                score: e.target.value})} className="form-control mb-2 w-75" value={assignment.score} type="number"/>
            <a href={`${URL}/completed/${assignment.completed}`} className="btn btn-primary me-2 float-end">Update Completed</a>
            <input onChange={(e)=>setAssignment({...assignment,
                completed: e.target.value})} className="form-control mb-2 w-75" value={assignment.completed} type="text"/>
        </>
    );
}

export default WorkingWithObjects;