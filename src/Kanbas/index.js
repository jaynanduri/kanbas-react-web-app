import KanbasNavigation from "./KanbasNavigation/KanbasNavigation";
import "./KanbasNavigation/index.css"
import {Navigate, Routes, Route} from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import {useState} from "react";
import store from "./store";
import {Provider} from "react-redux";
import db from "./Database";

function Kanbas() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState(
        {name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });
    const addNewCourse = () => {
        setCourses([...courses, {...course, _id: new Date().getTime().toString()}]);
    };
    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course)=>course._id !== courseId));
    };
    const updateCourse = () => {
        setCourses(courses.map((c)=>{
            if(c._id === course._id){
                return course;
            }else {
                return c;
            }
        }));
    };
    return (
        <Provider store={store}>
            <div className="d-flex h-100">
            <KanbasNavigation/>
                <div className="w-100">
                    <Routes>
                        <Route path="/" element={<Navigate to={"Dashboard"}/>}/>
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route path="Dashboard" element={
                            <Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                updateCourse={updateCourse}
                                deleteCourse={deleteCourse}
                            />} />
                        <Route path="Courses/:courseId/*" element={
                            <Courses
                                courses={courses}
                            />} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}

export default Kanbas;