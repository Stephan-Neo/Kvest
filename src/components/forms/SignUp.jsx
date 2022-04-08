import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import s from "../styles/SignUp.module.css"
import { Link, useNavigate } from "react-router-dom";
import ModalWindow from "../ModalWindow";

function SignUp() {
  useEffect(() => {document.title = 'Вечерний Квест | Регистрация'})
  let navigate = useNavigate()
  const [modal, setModal] = useState(false)
  const {
    register, watch,
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
    fetch('https://api.fkn-gt.ru:3000/register', {
      method: 'post',
      headers: {"Content-Type": 'aplication/json'},
      body: JSON.stringify(data)
    }).then((responce) => {
      return responce.json()
    }).then((d) => {
        response = d
        if(response.status !== "USER_EXIST"){
          return navigate("/login")
        }else{
          setModal(true)
        }
    })
    reset();
  }
  return (
      <div className={s.form}>
        <div className={s.reg}>Регистрация</div>
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
            <input className={s.input} placeholder="Подтвердите пароль"
              {...register('rpassword', {
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
                },
                validate: (val) =>{
                  if(watch('password') !== val){
                    return "* Пароли не совпадают";
                  }
                }
              })}
              type="password"
            />
            <div>
              {errors?.rpassword && <p>{errors?.rpassword?.message || "Error!"}</p>}
            </div>
            <input type="submit" className={s.button} disabled={!isValid}/>
        </form>
        <div className={s.links}>
          <Link to='/' className={s.link_login}>Главная</Link>
          <Link to='/login' className={s.link_login}>Войти</Link>
        </div>
        {modal ? <ModalWindow text={'Такой пользователь уже существует!'}/>: console.log()}
      </div>
  )
}
export default SignUp;