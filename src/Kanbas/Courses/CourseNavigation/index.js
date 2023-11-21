import {Link, useParams, useLocation} from "react-router-dom";

function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meeting", "Assignments", "Quizzes", "Grades", "People",
        "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations",
        "Syllabus", "Settings"];
    const eyelinks = ["Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations",
        "Syllabus"]

    const {courseId} = useParams();
    const {pathname} = useLocation();

    return (
        <div className="wd-navigation-element">
            {links.map((link, index) => (
                <Link
                key = {index}
                to={`/Kanbas/Courses/${courseId}/${link}`}
                className={`list-group-item wd-navigation-element-link p-2 ${pathname.includes(link) && "active wd-border-left"}`}>
                {link}{eyelinks.includes(link) ? <i className="fa-regular fa-eye-slash float-end p-1 wd-color-black"></i> : ""}</Link>
                ))}
        </div>
    );
}

export default CourseNavigation;