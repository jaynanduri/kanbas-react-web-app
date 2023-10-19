import KanbasNavigation from "./KanbasNavigation/KanbasNavigation";
import "./KanbasNavigation/index.css"
import {Navigate, Routes, Route} from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
    return (
            <div className="d-flex h-100">
            <KanbasNavigation/>
                <div className="w-100">
                    <Routes>
                        <Route path="/" element={<Navigate to={"Dashboard"}/>}/>
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route path="Dashboard" element={<Dashboard/>} />
                        <Route path="Courses/:courseId/*" element={<Courses/>} />
                    </Routes>
                </div>
            </div>
    );
}

export default Kanbas;