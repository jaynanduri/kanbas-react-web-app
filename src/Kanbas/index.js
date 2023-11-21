import KanbasNavigation from "./KanbasNavigation/KanbasNavigation";
import "./KanbasNavigation/index.css"
import {Navigate, Routes, Route} from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import {useEffect, useState} from "react";
import store from "./store";
import {Provider} from "react-redux";
import axios from "axios";

function Kanbas() {
    const [courses, setCourses] = useState([]);
    const BASE_URL = process.env.REACT_APP_BACKEND_URL;
    const URL = BASE_URL + "/api/courses";
    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    const addCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([
            response.data,
            ...courses,
        ]);
    }
    useEffect(()=>{
        findAllCourses();
    }, []);
    const [course, setCourse] = useState(
        {name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });
    const addNewCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([response.data, ...courses,]);
    };
    const deleteCourse = async (course) => {
        const response = await axios.delete(`${URL}/${course._id}`);
        setCourses(courses.filter((c)=>c.number !== course.number));
    };
    const updateCourse = async (course) => {
        const response = await axios.put(`${URL}/${course._id}`, course);
        setCourses(courses.map((c)=>{
            if(c.number === course.number){
                return course;
            }
            return c;
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