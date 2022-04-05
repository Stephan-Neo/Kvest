import React, { useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import s from "../styles/SignUp.module.css"
import { Link, useNavigate } from "react-router-dom";
import ModalWindow from "../ModalWindow";


function LogIn() {
  const [modal, setModal] = useState(false)
  let navigate = useNavigate()
  useEffect(() => {
    document.title = 'Вечерний Квест | Войти'
    let login = localStorage.getItem('login')
    if(login){
      return navigate('/')
    }
  })
  const {
    register, 
    formState: {
      errors, isValid
    },
    handleSubmit,
    reset
  } = useForm({
    mode: "onChange"
  })
  const onSubmit = (data) => {
    setModal(false)
    let response
    fetch('http://93.159.221.10/login', {
      method: 'post',
      headers: {"Content-Type": 'aplication/json'},
      body: JSON.stringify(data)
    }).then((responce) => {
      return responce.json()
    }).then((d) => {
        response = d
        if(response.status !== "USER_NOT_EXISTS"){
          localStorage.setItem('firstName', response.firstName)
          localStorage.setItem('id_user', response.status)
          localStorage.setItem('score', response.score)
          localStorage.setItem('login', true)

          localStorage.setItem('day1', JSON.stringify([{"id":1,"type":"text","text":"","status":"not_completed"},
          {"id":2,"type":"text","text":"","status":"not_completed"},
          {"id":3,"type":"text","text":"","status":"not_completed"},
          {"id":4,"type":"text","text":"","status":"not_completed"},
          {"id":5,"type":"text","text":"","status":"not_completed"}]))

          localStorage.setItem('day2', JSON.stringify([{"id":1,"type":"text","text":"","status":"not_completed"},
          {"id":2,"type":"text","text":"","status":"not_completed"},
          {"id":3,"type":"text","text":"","status":"not_completed"},
          {"id":4,"type":"text","text":"","status":"not_completed"},
          {"id":5,"type":"text","text":"","status":"not_completed"}]))

          localStorage.setItem('day3', JSON.stringify([{"id":1,"type":"text","text":"","status":"not_completed"},
          {"id":2,"type":"text","text":"","status":"not_completed"},
          {"id":3,"type":"text","text":"","status":"not_completed"},
          {"id":4,"type":"text","text":"","status":"not_completed"},
          {"id":5,"type":"text","text":"","status":"not_completed"}]))

          localStorage.setItem('day4', JSON.stringify([{"id":1,"type":"text","text":"","status":"not_completed"},
          {"id":2,"type":"text","text":"","status":"not_completed"},
          {"id":3,"type":"text","text":"","status":"not_completed"},
          {"id":4,"type":"text","text":"","status":"not_completed"},
          {"id":5,"type":"text","text":"","status":"not_completed"}]))

          return navigate("/")
        }else{
          setModal(true)
        }
    })
    reset();
  }
  return (
      <div className={s.form}>
        <div className={s.reg}>Войти</div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className={s.input} placeholder="Логин"
              {...register('firstName', {
                required: "* Поле обязательно к заполнению",
                minLength: {
                  value: 6,
                  message: "* Миннимум 6 символов"
                },
                maxLength: {
                  value: 20,
                  message: "* Не болле 20 символов"
                },
                pattern:{
                  value: /^[A-Za-z0-9_!-]{1,32}$/,
                  message: "* Можно только на латинице. Доступные спец символы( _ ! -)"
                }
              })}
            />
            <div>
              {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
            </div>
            <input className={s.input} placeholder="Пароль"
              {...register('password', {
                required: "* Поле обязательно к заполнению",
                minLength: {
                  value: 6,
                  message: "* Миннимум 6 символов"
                },
                maxLength: {
                  value: 20,
                  message: "* Не болле 20 символов"
                },
                pattern:{
                  value: /^[A-Za-z0-9_!-]{1,32}$/,
                  message: "* Можно только на латинице. Доступные спец символы( _ ! -)"
                }
              })}
              type="password"
            />
            <div>
              {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
            </div>
            <input type="submit" className={s.button} disabled={!isValid}/>
        </form>
        <div className={s.links}>
          <Link to='/' className={s.link_login}>Главная</Link>
          {/* <Link to='/signup' className={s.link_login}>Регистрация</Link> */}
        </div>
        {modal ? <ModalWindow text={'Такого пользователя не существует или вы ввели неправильные данные!'}/>: console.log()}
      </div> 
  )
}
export default LogIn;