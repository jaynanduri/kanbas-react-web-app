import axios from "axios";
import React, {useEffect, useState} from "react";
function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with Express",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });
    const BASE_URL = process.env.BACKEND_URL;
    const URL = `${BASE_URL}/a5/assignment`;
    const fetchAssignment = async () => {
        const response = await axios.get(`${URL}`);
        setAssignment(response.data);
    };

    const updateTitle = async () => {
        const response = await axios.get(`${URL}/title/${assignment.title}`);
        console.log(response.data);
        setAssignment(response.data);
    };

    useEffect(() => {
        fetchAssignment();
        updateTitle();
    }, []);
    return (
        <>
            <h3>Working with Objects</h3>
            <h4>Retrieving Objects</h4>
            <input className="form-control mb-2" onChange={(e)=>{setAssignment({...assignment, title: e.target.value})}}
            type="text" value={assignment.title}/>
            <button onClick={updateTitle} className="w-100 btn btn-primary mb-2">
                Update Title to: {assignment.title}
            </button>
            <button onClick={fetchAssignment} className="w-100 btn btn-danger mb-2">
                Fetch Assignment
            </button>
        </>
    );
}

export default WorkingWithObjects;