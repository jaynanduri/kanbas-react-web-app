import {Link} from "react-router-dom";
import {React} from "react";
import "./index.css";

function Dashboard(
    {courses, course, setCourse, addNewCourse, deleteCourse, updateCourse}
) {
    const colors = ["darkblue", "darkgoldenrod", "darkred"];
    return (
        <div className="container-fluid">
            <div className="row d-flex flex-row flex-wrap pb-0">
                <div className="col col-sm-12 col-xl-8 col-md-10 wd-dashboard-header-text">Dashboard</div>
            </div>
            <div className="row d-flex flex-row flex-wrap pb-0">
                <div className="col col-sm-11 col-xl-11 col-md-11">
                    <hr className="m-2 font-weight"/>
                </div>
            </div>
            <div className="row d-flex flex-row flex-wrap mt-2">
                 <div className="wd-dashboard-sub-header-text col-sm-11 col-md-11 col-xl-11">
                     Published Courses(24)
                 </div>
                <div className="wd-dashboard-sub-header-text col col-sm-10 col-xl-10 col-md-10">
                    <hr className="m-1 font-weight"/>
                </div>
            </div>
            <div className="row d-flex flex-row flex-wrap mt-2">
                <div className="wd-dashboard-list col-sm-11 col-md-11 col-xl-11 list-group">
                    <ul className={"list-group"}>
                        <li className={"list-group-item"}>
                            <input value={course.name} className={"form-control border list-group-item w-25 m-1"}
                                onChange={(e)=>setCourse({...course,
                                name: e.target.value})}/>
                            <input value={course.number} className={"form-control border list-group-item w-25 m-1"}
                                onChange={(e)=>setCourse({...course,
                                number: e.target.value})}/>
                            <input value={course.startDate} className={"form-control border list-group-item w-25 m-1"}
                                   type={"date"} onChange={(e)=>setCourse(
                                       {...course, startDate: e.target.value})}/>
                            <input value={course.endDate} className={"form-control border list-group-item w-25 m-1"}
                                   type={"date"} onChange={(e)=>setCourse(
                                       {...course, endDate: e.target.value})}/>
                            <button onClick={addNewCourse} className={"btn btn-success border m-1"}>
                                Add
                            </button>
                            <button onClick={() => updateCourse(course)} className={"btn btn-primary border m-1"}>
                                Update
                            </button>
                        </li>
                    </ul>
                    <div className="container-fluid">
                        <div className="d-flex flex-row flex-wrap row" style={{"margin": "1rem"}}>
                            {courses.map((course) => {
                                return (
                                <div className="card wd-course-card m-5 p-0">
                                <div className="wd-card-image-container" style={{"background":`${colors[1]}`}}>
                                    <div className="float-end">
                                        <div className="wd-course-card-ellipses p-1">
                                            <i className="fa-solid fa-ellipsis-vertical wd-color-white p-2"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <Link key={course._id} to={`/Kanbas/Courses/${course.number}`}
                                          className="wd-card-header" style={{textDecoration:"none"}}>
                                        {course.number} {course.name} <span className="wd-col-red">...</span>
                                    </Link>
                                    <p className="card-subtitle text-body-secondary">{course.number}.12631.{course.endDate}</p>
                                    <p className="card-text wd-card-text">202410_1 Fall 2023 Semester</p>
                                    <button onClick={(e)=>{
                                        e.preventDefault(); // from clicking on hyperlink
                                        deleteCourse(course);
                                    }}
                                        className={"btn btn-danger border float-end m-1"}>
                                        Delete
                                    </button>
                                    <button onClick={(e)=>{
                                        e.preventDefault(); // from clicking on hyperlink
                                        setCourse(course);
                                    }}
                                        className={"btn btn-warning border float-end m-1"}>
                                        Edit
                                    </button>
                                </div>
                            </div>
                            );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
