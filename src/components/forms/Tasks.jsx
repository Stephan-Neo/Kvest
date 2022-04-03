import React, { useEffect, useState } from "react";
import TaskFirst from "./Tasks/TaskFirst";
import TaskSecond from "./Tasks/TaskSecond";
import TaskThird from "./Tasks/TaskThird";
import TaskFourth from "./Tasks/TaskFourth";
import TaskFifth from "./Tasks/TaskFifth";

function Tasks(props){
    const [loadTask, setLoadTask] = useState(false)
    useEffect(() => {
        if(props.id === 'day1'){
            let response1
            let tasks1
            fetch('http://93.159.221.10/get_task', {
            method: 'post',
            headers: {"Content-Type": 'aplication/json'},
            body: JSON.stringify({id: Number(localStorage.getItem("id_user")), day: 1})
            }).then((responce1) => {
                return responce1.json()
            }).then((d) => {
                response1 = d
                tasks1 = JSON.parse(response1.task)
                localStorage.setItem('day1', JSON.stringify(tasks1.tasks))
                setLoadTask(true)
            })
        }
        if(props.id === 'day2'){
            let response2
            let tasks2
            fetch('http://93.159.221.10/get_task', {
            method: 'post',
            headers: {"Content-Type": 'aplication/json'},
            body: JSON.stringify({id: Number(localStorage.getItem("id_user")), day: 2})
            }).then((responce2) => {
                return responce2.json()
            }).then((d) => {
                response2 = d
                tasks2 = JSON.parse(response2.task)
                localStorage.setItem('day2', JSON.stringify(tasks2.tasks))
                setLoadTask(true)
            })
        }
    }, [props.id])
    return(
        <>
            <TaskFirst id={props.id} clicked={props.clicked} loadTask={loadTask}/>
            <TaskSecond id={props.id} clicked={props.clicked}/>
            <TaskThird id={props.id} clicked={props.clicked}/>
            <TaskFourth id={props.id} clicked={props.clicked}/>
            <TaskFifth id={props.id} clicked={props.clicked}/>
        </>
        
    )
}

export default Tasks