import React from "react";
import TaskFirst from "./Tasks/TaskFirst";
import TaskSecond from "./Tasks/TaskSecond";
import TaskThird from "./Tasks/TaskThird";
import TaskFourth from "./Tasks/TaskFourth";
import TaskFifth from "./Tasks/TaskFifth";

function Tasks(props){
    return(
        <>
            <TaskFirst id={props.id} clicked={props.clicked}/>
            <TaskSecond id={props.id} clicked={props.clicked}/>
            <TaskThird id={props.id} clicked={props.clicked}/>
            <TaskFourth id={props.id} clicked={props.clicked}/>
            <TaskFifth id={props.id} clicked={props.clicked}/>
        </>
        
    )
}

export default Tasks