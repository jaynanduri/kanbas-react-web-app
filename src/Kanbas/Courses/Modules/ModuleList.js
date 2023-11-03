import {useParams} from "react-router";
import db from "../../Database";
import {useLocation} from "react-router-dom";
import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {addModule, updateModule, deleteModule, setModule} from "./modulesReducer";

function ModuleList() {
    const {courseId} = useParams();
    const {pathname} = useLocation();
    const modules = useSelector((state)=> state.modulesReducer.modules);
    const module = useSelector((state)=> state.modulesReducer.module);
    const dispatch = useDispatch();
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
            <li className={"list-group-item"}>
                <button onClick={() => dispatch(addModule({...module, course: courseId}))}
                        className={"btn btn-success border float-end m-1"}>
                    Add
                </button>
                <button onClick={() => dispatch(updateModule(module))}
                        className={"btn btn-primary border float-end m-1"}>
                    Update
                </button>
                <input value={module.name} className={"form-control border list-group-item w-25 m-1"}
                                onChange={(e) => dispatch(setModule({...module,
                                name: e.target.value}))}/>
                <textarea value={module.description}
                          onChange={(e)=> dispatch(setModule({
                    ...module, description: e.target.value}))} className={"form-control border w-50 m-1"}/>
            </li>
            {
                modules.filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li className={`list-group-item ${pathname.includes("Modules") ? "wd-green-border" : ""}`}>
                            <i className="fas fa-grip-vertical wd-custom-margin"></i>
                            <strong>{module.name}</strong>
                            <button onClick={() => dispatch(deleteModule(module._id))}
                                    className={"btn btn-danger border float-end wd-custom-margin"}>
                                Delete
                            </button>
                            <button onClick={(event) => dispatch(setModule(module))}
                                    className={"btn btn-warning border float-end wd-custom-margin"}>
                                Edit
                            </button>
                            <i className="fa-solid fa-ellipsis-vertical black float-end wd-custom-margin mt-2"></i>
                            <i className="fa-solid fa-check-circle wd-color-green float-end wd-custom-margin mt-2"></i>
                            <p className="wd-padding-left">{module.description}</p>
                        </li>
                    ))
            }
        </ul>
    );
}

export default ModuleList;