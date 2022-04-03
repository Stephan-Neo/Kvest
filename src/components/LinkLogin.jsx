import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkLogin() {
  const onSubmit = () => {
    localStorage.clear()
  }
  return (
    <div className="login">
        <li>
            <Link to='/login' onClick={onSubmit}>Выйти</Link>
        </li>
    </div>
  )
}
