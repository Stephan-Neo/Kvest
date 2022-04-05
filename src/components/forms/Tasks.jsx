import React, { useEffect, useState } from "react";
import TaskFirst from "./Tasks/TaskFirst";
import TaskSecond from "./Tasks/TaskSecond";
import TaskThird from "./Tasks/TaskThird";
import TaskFourth from "./Tasks/TaskFourth";
import TaskFifth from "./Tasks/TaskFifth";

function Tasks(props){
    const [loadTask, setLoadTask] = useState(false)
    useEffect(() => {
        setLoadTask(false)

        let response_update_score
        fetch('http://93.159.221.10/update_result', {
            method: 'post',
            headers: {"Content-Type": 'aplication/json'},
            body: JSON.stringify({id: Number(localStorage.getItem("id_user"))})
            }).then((response_update_score) => {
                return response_update_score.json()
            }).then((d) => {
                response_update_score = d
                localStorage.setItem('score', response_update_score.score)
                localStorage.setItem('firstName', response_update_score.firstName)
        })

        if(props.id === 'day1'){
            let responce1
            let tasks1
            fetch('http://93.159.221.10/get_task', {
            method: 'post',
            headers: {"Content-Type": 'aplication/json'},
            body: JSON.stringify({id: Number(localStorage.getItem("id_user")), day: 1})
            }).then((responce1) => {
                return responce1.json()
            }).then((d) => {
                responce1 = d
                tasks1 = JSON.parse(responce1.task)
                localStorage.setItem('day1', JSON.stringify(tasks1.tasks))
                setLoadTask(true)
            })
        }
        if(props.id === 'day2'){
            let responce2
            let tasks2
            fetch('http://93.159.221.10/get_task', {
            method: 'post',
            headers: {"Content-Type": 'aplication/json'},
            body: JSON.stringify({id: Number(localStorage.getItem("id_user")), day: 2})
            }).then((responce2) => {
                return responce2.json()
            }).then((d) => {
                responce2 = d
                tasks2 = JSON.parse(responce2.task)
                localStorage.setItem('day2', JSON.stringify(tasks2.tasks))
                setLoadTask(true)
            })
        }
        if(props.id === 'day3'){
            let responce3
            let tasks3
            fetch('http://93.159.221.10/get_task', {
            method: 'post',
            headers: {"Content-Type": 'aplication/json'},
            body: JSON.stringify({id: Number(localStorage.getItem("id_user")), day: 3})
            }).then((responce3) => {
                return responce3.json()
            }).then((d) => {
                responce3 = d
                tasks3 = JSON.parse(responce3.task)
                localStorage.setItem('day3', JSON.stringify(tasks3.tasks))
                setLoadTask(true)
            })
        }
        if(props.id === 'day4'){
            let responce4
            let tasks4
            fetch('http://93.159.221.10/get_task', {
            method: 'post',
            headers: {"Content-Type": 'aplication/json'},
            body: JSON.stringify({id: Number(localStorage.getItem("id_user")), day: 4})
            }).then((responce4) => {
                return responce4.json()
            }).then((d) => {
                responce4 = d
                tasks4 = JSON.parse(responce4.task)
                localStorage.setItem('day4', JSON.stringify(tasks4.tasks))
                setLoadTask(true)
            })
        }
    }, [props.id])
    return(
        <>
            <TaskFirst id={props.id} clicked={props.clicked} loadTask={loadTask}/>
            <TaskSecond id={props.id} clicked={props.clicked} loadTask={loadTask}/>
            <TaskThird id={props.id} clicked={props.clicked} loadTask={loadTask}/>
            <TaskFourth id={props.id} clicked={props.clicked} loadTask={loadTask}/>
            <TaskFifth id={props.id} clicked={props.clicked} loadTask={loadTask}/>
        </>
        
    )
}

export default Tasks