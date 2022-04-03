import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkPublic() {
  return (
    <div className="login">
        <li>
            <Link to='/signup'>Регистрация</Link>
        </li>
        <li>
            <Link to='/login'>Войти</Link>
        </li>
    </div>
  )
}
