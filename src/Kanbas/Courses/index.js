// eslint-disable-next-line
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import "./index.css"
import CourseNavigation from "./CourseNavigation";
import {Navigate, Route, Routes} from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import CourseStatus from "./Home/CourseStatus";
import CourseActionButtons from "./Home/CourseActionButtons";
import AssignmentActionButtons from "./Assignments/AssignmentActionButtons";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import AssignmentName from "./Assignments/AssignmentEditor/AssignmentName";
import AssignmentEditorActionButtons from "./Assignments/AssignmentEditor/AssignmentEditorActionButtons";
import {useEffect, useState} from "react";
import axios from "axios";

function Courses() {
    const BASE_URL = process.env.REACT_APP_BACKEND_URL;
    const URL = BASE_URL + "/api/courses";
    const {courseId} = useParams();
    const {pathname} = useLocation();
    // const array = pathname.split("/");
    const [course, setCourse] = useState({});
    const findCourseById = async (courseId) => {
        try {
            const response = await axios.get(`${URL}/${courseId}`);
            setCourse(response.data);
    } catch (error) {
        console.error("Error fetching course data:", error);
    }
    };
    useEffect(()=> {
        findCourseById(courseId)
    }, [courseId]);
    // console.log(course);
    return (
        <div className="wd-scrollable">
            <div className="wd-main-account-page">
                <div className="container-fluid">
                    <div className="row wd-padding-left pt-3">
                        <div className="col-auto p-2">
                            <i className="fa-solid fa-bars wd-custom-hamburger"></i>
                        </div>
                        <div className="col wd-padding-left align-content-center">
                            <nav className="wd-breadcrumb-divider" aria-label="breadcrumb">
                                <ol className="breadcrumb w-100">
                                    <Link to="Home" className="breadcrumb-item wd-breadcrumb-header">{course.name}</Link>
                                    <span className="breadcrumb-divider">&gt;</span>
                                    <li className={"breadcrumb-item wd-breadcrumb-header-active"}
                                        aria-current="page">{
                                            <Routes>
                                                <Route path = "/" element={<Navigate to={"Home"}/>}/>
                                                <Route path="Home" element={<>Home</>}/>
                                                <Route path="Modules" element={<>Modules</>}/>
                                                <Route path="Assignments" element={<>Assignments</>}/>
                                                <Route path="Assignments/:assignmentId" element={
                                                    <><Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                                                          className="breadcrumb-item wd-breadcrumb-header d-flex">
                                                        Assignments <AssignmentName/>
                                                    </Link>
                                                    </>}/>
                                                <Route path="Grades" element={<>Grades</>}/>
                                                <Route path="Grades" element={<>Grades</>}/>
                                            </Routes>}
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-light border"><i className="fa-solid fa-glasses"></i> Student View</button>
                        </div>
                    </div>
                    <div className="row wd-padding-left">
                        <hr className="wd-custom-divider"/>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <div className="wd-account-navigation">
                                <CourseNavigation courses={course}/>
                            </div>
                        </div>
                        <div className="col-7">
                            { pathname.includes("Home") || pathname.includes("Modules") ?
                                <CourseActionButtons/>:
                                pathname.includes("Assignments/") ? <AssignmentEditorActionButtons/> :
                                    <AssignmentActionButtons/>}

                            <div className="row pt-2">
                                <hr/>
                            </div>
                            <div className="row">
                                <Routes>
                                    <Route path = "/" element={<Navigate to={"Home"}/>}/>
                                    <Route path="Home" element={<Home/>}/>
                                    <Route path="Modules" element={<Modules/>}/>
                                    <Route path="Assignments" element={<Assignments/>}/>
                                    <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
                                    <Route path="Grades" element={<h1>Grades</h1>}/>
                                </Routes>
                            </div>
                        </div>
                        {pathname.includes("Home") ? <CourseStatus/> : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Courses;