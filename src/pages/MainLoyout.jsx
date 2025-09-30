import { NavLink, Outlet } from "react-router";

export default function MainLoyout() {
  return (
    <div>
      <header>
        <div className="logo"></div>
        <nav>
            <NavLink to="/">Главная</NavLink>
            <NavLink to ="/admin">Админка</NavLink>
            <NavLink to="/about">о нас</NavLink>
            <NavLink to="/ToDo">ТуДу лист</NavLink>
            <NavLink to="/convert">Конвертер</NavLink>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        Подвальчик с детишками
      </footer>
    </div>
  )
}
