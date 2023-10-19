import {useParams} from "react-router";

import db from "../../Database";
import {useLocation} from "react-router-dom";

function ModuleList() {
    const {courseId} = useParams();
    const {pathname} = useLocation();
    const modules = db.modules;
    return (
        <ul className="list-group pb-2">
            <li className="list-group-item list-group-item-secondary border">
                <i className="fas fa-grip-vertical wd-custom-margin"></i>
                <i className="fa-solid fa-caret-down wd-custom-margin"></i> Resources
                <i className="fa-solid fa-ellipsis-vertical black float-end wd-custom-margin"></i>
                <i className="fa-solid fa-plus grey float-end wd-custom-margin"></i>

                <i className="fa-solid fa-caret-down float-end wd-custom-margin"></i>
                <i className="fa-solid fa-check-circle wd-color-green float-end wd-custom-margin"></i>
            </li>
            {
                modules.filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li className={`list-group-item ${pathname.includes("Modules") ? "wd-green-border" : ""}`}>
                            <i className="fas fa-grip-vertical wd-custom-margin"></i>
                            <strong>{module.name}</strong>
                            <i className="fa-solid fa-ellipsis-vertical black float-end wd-custom-margin"></i>
                            <i className="fa-solid fa-check-circle wd-color-green float-end wd-custom-margin"></i>
                            <p className="wd-padding-left">{module.description}</p>
                        </li>
                        // <li key={index} className="list-group-item">
                        //     <h3>{module.name}</h3>
                        //     <p>{module.description}</p>
                        // </li>
                    ))
            }
        </ul>
    );
}

export default ModuleList;