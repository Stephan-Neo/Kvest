import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import s from '../../../pages/styles/Day.module.css'

function TaskFirst(props){
    const { register, handleSubmit, watch, reset, formState: {errors, isValid} } = useForm({mode: 'onSubmit'})
    const [dis, setDis] = useState(false)
    let idDay;
    useEffect(() => {
        if(props.clicked){
            reset()
        }
        if(JSON.parse(localStorage.getItem(props.id))[0].status === 'completed'){
            setDis(true)
        }else{
            setDis(false)
        }
    }, [props.id])
    const onSubmit = (data) => {
        if(props.id === 'day1'){
            idDay = 1
        }
        if(props.id === 'day2'){
            idDay = 2
        }
        if(props.id === 'day3'){
            idDay = 3
        }
        if(props.id === 'day4'){
            idDay = 4
        }
        let response
        fetch('http://93.159.221.10/check_task', {
            method: 'post',
            headers: {"Content-Type": 'aplication/json'},
            body: JSON.stringify({id: Number(localStorage.getItem("id_user")), day: idDay, answer: data})
            }).then((responce) => {
            return responce.json()
            }).then((d) => {
                response = d
                if(JSON.parse(response.completed)){
                    setDis(true)
                    let last_score = Number(localStorage.getItem('score'))
                    localStorage.setItem('score', last_score + 1)

                    let response_update_score
                    fetch('http://93.159.221.10/update_rezult', {
                        method: 'post',
                        headers: {"Content-Type": 'aplication/json'},
                        body: JSON.stringify({id: Number(localStorage.getItem("id_user"))})
                        }).then((response_update_score) => {
                            return response_update_score.json()
                        }).then((d) => {
                            response_update_score = d
                            console.log(response_update_score)
                        })
                }else{
                    setDis(false)
                }
        })
        reset();
    } 
    return(
        <div className='section' id={props.id}>
            <div className={s.task}>
                <div className={s.headTask}>Задание 1</div>
                <div className={s.textTask}>Разгадайте шифр: {props.loadTask ? JSON.parse(localStorage.getItem(props.id))[0].text: ' '}</div>
                <span>Ваш ответ:</span>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea type="text" className={s.input} disabled={dis ? true : false}
                    {...register('inputTask1', {
                        required: "* Введите ответ",
                    })}
                    />
                    <div className={s.pod}>
                        <div className={s.error}>
                            {errors?.inputTask1 && <p>{errors?.inputTask1?.message || "Error!"}</p>}
                        </div>
                        <input type="submit" className={s.button} disabled={dis ? true : false}/>
                    </div>
                </form>
                <div className={s.answer}>
                    <div className={dis ? s.resh: s.neresh}>{dis ? "Решено": 'Не решено'}</div>
                </div>
            </div>
        </div>
    )
}

export default TaskFirst