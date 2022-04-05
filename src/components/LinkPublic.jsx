import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkPublic() {
  return (
      <Link to='/login' className="login">Войти</Link>
  )
}
