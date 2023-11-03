import React from "react";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariable from "./BooleanStateVariable";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";

const Assignment4 = () => {
    return (
        <div className="container">
            <h1>Assignment 4</h1>
            <ReduxExamples/>
            <Add a={1} b={2}/>
            <ClickEvent/>
            <PassingDataOnEvent/>
            <PassingFunctions theFunction={()=>(alert("Hello"))}/>
            <EventObject/>
            <Counter/>
            <BooleanStateVariable/>
            <StringStateVariables/>
            <DateStateVariable/>
            <ObjectStateVariable/>
            <ArrayStateVariable/>
            <ParentStateComponent/>
        </div>
    );
};

export default Assignment4;