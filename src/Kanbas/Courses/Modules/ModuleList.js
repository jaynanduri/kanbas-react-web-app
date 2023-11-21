import {useParams} from "react-router";
import {useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {addModule, updateModule, deleteModule, setModule, setModules} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
    const {courseId} = useParams();
    const {pathname} = useLocation();
    useEffect(()=>{
        client.findModulesForCourse(courseId).then((modules)=>dispatch(setModules(modules)))
    }, [courseId]);
    const modules = useSelector((state)=> state.modulesReducer.modules);
    const module = useSelector((state)=> state.modulesReducer.module);
    const dispatch = useDispatch();
    const handleAddModule = () => {
        client.createModule(courseId, module).then((module)=>{
           dispatch(addModule(module));
        });
    };
    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status)=>{
           dispatch(deleteModule(moduleId));
        });
    };
    const handleUpdateModule = (moduleId) => {
        client.updateModule(module).then((status)=>{
            dispatch(updateModule(module));
        });
    };
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
                <button onClick={handleAddModule}
                        className={"btn btn-success border float-end m-1"}>
                    Add
                </button>
                <button onClick={() => handleUpdateModule(module)}
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
                            <button onClick={() => handleDeleteModule(module._id)}
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