import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
        <div className="row">
            <ul className="list-group">
                <li className="list-group-item list-group-item-secondary">
                    <i className="fas fa-grip-vertical p-2 m-1"></i>
                    <i className="fa-solid fa-caret-down p-2"></i> <strong>Assignments</strong>
                    <i className="fa-solid fa-ellipsis-vertical black float-end p-2 m-1"></i>
                    <i className="fa-solid fa-plus grey float-end p-2 m-1"></i>
                    <button type="button" className="btn btn-outline-secondary float-end">40% of
                        total
                    </button>
                </li>
                {courseAssignments.map((assignment)=>(
                    <li className="list-group-item container-fluid p-0 m-0 wd-green-border">
                        <div className="row p-0 m-0 align-items-center">
                            <div className="col-1 p-0 m-0 text-center">
                                <i className="fas fa-grip-vertical wd-custom-margin"></i>
                                <i className="fa-solid fa-book wd-color-green wd-custom-margin"></i>
                            </div>
                            <div className="col-10 p-0 m-0 pt-2 pb-2">
                                <div className="wd-assignment-custom-font">
                                    <Link
                                        key={assignment._id}
                                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{textDecoration:"None", color:"black"}}>
                                        <strong>{assignment.title}</strong>
                                    </Link>
                                    <p className="p-0 m-0">
                                        Week 0 - SETUP - Week Starting on Sept 5th Module
                                    </p>
                                    <p className="p-0 m-0">
                                        <strong>Due</strong> Sept 25, 2023 at 11:59pm | 100 pts
                                    </p>
                                </div>
                            </div>
                            <div className="col-1 p-0 m-0 text-center">
                                <i className="fa-solid fa-check-circle wd-color-green wd-custom-margin"></i>

                                <i className="fa-solid fa-ellipsis-vertical black ma-050 wd-custom-margin"></i>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
}
export default Assignments;