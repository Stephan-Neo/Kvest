import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkLogin() {
  const onSubmit = () => {
    localStorage.clear()
  }
  return (
    <Link to='/login' onClick={onSubmit} className='login'>Выйти</Link>
  )
}
