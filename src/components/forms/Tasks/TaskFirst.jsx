import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import s from '../../../pages/styles/Day.module.css'

function TaskFirst(props){
    const { register, handleSubmit, watch, reset, formState: {errors, isValid} } = useForm({mode: 'onSubmit'})
    useEffect(() => {
        if(props.clicked){
            reset()
        }
    })
    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset();
    } 
    return(
        <div className='section' id={props.id}>
            <div className={s.task}>
                <div className={s.headTask}>Задание 1</div>
                <div className={s.textTask}>Разгадайте шифр</div>
                <span>Ваш ответ:</span>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea type="text" className={s.input}
                    {...register('inputTask1', {
                        required: "* Введите ответ",
                    })}
                    />
                    <div className={s.pod}>
                        <div className={s.error}>
                            {errors?.inputTask1 && <p>{errors?.inputTask1?.message || "Error!"}</p>}
                        </div>
                        <input type="submit" className={s.button}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TaskFirst