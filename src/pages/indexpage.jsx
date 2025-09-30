import { NavLink } from "react-router";

export default function indexpage() {
  return (
    <div>
      <h1>Главная страница</h1>
      <NavLink to ="/admin">Админка</NavLink>
    </div>
  )
}
