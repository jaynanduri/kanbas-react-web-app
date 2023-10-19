import {Link} from "react-router-dom";

import db from "../Database"
import "./index.css";

function Dashboard() {
    const courses = db.courses;
    console.log(courses);
    const colors = ["darkblue", "darkgoldenrod", "darkred"]
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
            <div className="container-fluid">
                <div className="d-flex flex-row flex-wrap row" style={{"margin": "1rem"}}>
                    {courses.map((course) => {
                        let random = Math.floor(Math.random() * colors.length);
                        return (
                        <div className="card wd-course-card m-5 p-0">
                        <div className="wd-card-image-container" style={{"background":`${colors[random]}`}}>
                            <div className="float-end">
                                <div className="wd-course-card-ellipses p-1">
                                    <i className="fa-solid fa-ellipsis-vertical wd-color-white p-2"></i>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item wd-card-header">
                                {course.number} {course.name} <span className="wd-col-red">...</span>
                            </Link>
                            <p className="card-subtitle text-body-secondary">{course.number}.12631.{course.endDate}</p>
                            <p className="card-text wd-card-text">202410_1 Fall 2023 Semester</p>
                            <i className="fa-solid fa-file-pen fa-lg wd-light-grey p-2"></i>
                        </div>
                    </div>
                    );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
