import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
        <div>
            <div className="row container-fluid">
                <div className="mb-3 p-1">
                    <label htmlFor="exampleFormControlInput1" className="form-label p-2"><strong>Assignment
                        Name</strong></label>
                    <input type="email" className="form-control" id="exampleFormControlInput1"
                           placeholder={assignment.title}/>
                </div>
                <div className="mb-3 p-1">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3">{`This describes, ${assignment.title}`}</textarea>
                </div>
            </div>
            <div className="row container-fluid mb-3 p-1">
                <div className="col col-sm-3" style={{textAlign: "right", marginRight: "0.1rem"}}>
                    <label htmlFor="points">Points</label>
                </div>
                <div className="col col-sm-7">
                    <div className="col-sm-10 ml-0">
                        <input id="points" type="text" className="form-control"/>
                    </div>
                </div>
            </div>
            <div className="row container-fluid mb-3 p-1">
                <div className="col col-sm-3" style={{textAlign: "right", marginRight: "0.1rem"}}>
                    <div className="form-row">
                        <label htmlFor="assignment-group" className="col-form-label">Assignment Group</label>
                    </div>
                </div>
                <div className="col col-sm-7">
                    <div className="col-sm-10 ml-0">
                        <select id="assignment-group" className="wd-form-select-style w-100"
                                aria-label="Default select example">
                            <option selected="">ASSIGNMENTS</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row container-fluid mb-3 p-1">
                <div className="col col-sm-3" style={{textAlign: "right", marginRight: "0.1rem"}}>
                    <div className="form-row">
                        <label htmlFor="assignment-group" className="col-form-label">Display Grade as</label>
                    </div>
                </div>
                <div className="col col-sm-7">
                    <div className="col-sm-10 ml-0">
                        <select id="grade-group" className="wd-form-select-style w-100" aria-label="Default select example">
                            <option selected="">Percentage</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row container-fluid mb-3 p-1">
                <div className="col col-sm-3" style={{textAlign: "right", marginRight: "0.1rem"}}></div>
                <div className="col col-sm-7">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault" style={{paddingLeft:"5px"}}>
                            Do not count this assignment towards the final grade
                        </label>
                </div>
            </div>
            <div className="row container-fluid mb-3 p-1">
                <div className="col col-sm-3" style={{textAlign: "right", marginRight: "0.1rem"}}>
                    <label htmlFor="submission-type">Submission Type</label>
                </div>
                <div className="col col-sm-7">
                    <div className="wd-box-submission-type w-75 border p-4">
                        <div className="row">
                            <div className="col col-sm-7 mb-3 pb-1">
                                <select id="submission-type" className="form-select"
                                        aria-label="Default select example">
                                    <option selected="">Online</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-sm-7">
                                <p className="wd-custom-text"><strong>Online Entry Options</strong></p>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"
                                           checked="true"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault1">
                                            Text Entry
                                        </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked1"
                                           checked="true"/>
                                        <label className="form-check-label" htmlFor="flexCheckChecked1">
                                            Website Url
                                        </label>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2"
                                           checked="true"/>
                                        <label className="form-check-label" htmlFor="flexCheckChecked2">
                                            Media Recordings
                                        </label>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked3"/>
                                        <label className="form-check-label" htmlFor="flexCheckChecked3">
                                            Student Annotation
                                        </label>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            File Uploads
                                        </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row container-fluid">
                <div className="col col-sm-3" style={{textAlign: "right", marginRight: "0.1rem"}}>
                    <label htmlFor="Assign">Assign</label>
                </div>
                <div className="col col-sm-7">
                    <div className="border w-75 p-4">
                        <div className="row mb-3 pb-1">
                            <div className="border w-100 p-3">
                                <button id="Assign" type="button"
                                        className="btn btn-light wd-custom-button-width border">Everyone &times;</button>
                            </div>
                        </div>
                        <div className="row mb-3 pb-1">
                            <div className={"col-12"}>
                                <label htmlFor="due" className="">Due</label>
                                <input id="due" className="form-control" type="date" value="09-18-2023"/>
                            </div>
                        </div>
                        <div className="row pb-1">
                            <div className="col-6">
                                <label htmlFor="af" className="">Available From</label>
                                <input className="form-control" id="af" type="date" value="18-09-2023"/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="unt" className="">Until</label>
                                <input className="form-control" id="unt" type="date" value="18-09-2023"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"row container-fluid mb-3"}>
                <div className="col col-sm-3" style={{textAlign: "right", marginRight: "0.1rem"}}></div>
                <div className="col col-sm-7">
                    <button type="button" className="btn btn-light border w-75"><i className="fa-solid fa-plus"></i>Add</button>
                </div>
            </div>
            <div className="row">
                <hr className="wd-custom-divider"/>
            </div>
            <div className="row">
                <div className="col col-sm-7">
                    <input className="form-check-input" type="checkbox" id="flexCheckDefault5"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault5" style={{paddingLeft:"5px"}}>
                            Notify users that this content has been changed
                        </label>
                </div>
            </div>
            <button onClick={handleSave} className="btn btn-danger wd-custom-margin float-end border mb-4">Save</button>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-light float-end wd-custom-margin border">
                Cancel
            </Link>
        </div>
  );
}


export default AssignmentEditor;

