import {useParams} from "react-router-dom";
import db from "../../../Database";
import "../../index.css";
function AssignmentName() {
    const {assignmentId} = useParams();
    const assignment = db.assignments.find((assignment) => assignment._id === assignmentId);
    console.log(assignment)
    return (<>
        <span className={"breadcrumb-divider pb-0"} style={{fontSize:"1rem", fontWeight:"400"}}>&gt;</span>
        <span style={{fontSize:"1.7rem", color:"black"}}>{assignment.title}</span>
    </>);
}

export default AssignmentName;