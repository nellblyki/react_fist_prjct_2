import React from 'react'
import { NavLink } from 'react-router'

export default function AdminPage() {
  return (
    <div>
      <h1>Admin Page</h1>
      <NavLink to="/createquizes">Создать квиз</NavLink>
    </div>
  )
}
