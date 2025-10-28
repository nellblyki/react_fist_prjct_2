import { NavLink, Outlet } from "react-router";
import { CartContext } from "../components/Store";
import { useState } from "react";
export default function MainLoyout() {
  const [Cart,SetCart] = useState([])
  return (
    <CartContext value={[Cart,SetCart]}>
      <div>
        <header className="flex justify-center gap-x-5 py-4 mb-10">
          <div className="text-2xl font-bold items-center">LOGO</div>
          <nav className="flex gap-x-4 ">
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/admin">Админка</NavLink>
            <NavLink to="/about">о нас</NavLink>
            <NavLink to="/ToDo">ТуДу лист</NavLink>
            <NavLink to="/convert">Конвертер</NavLink>
            <NavLink to="/quizes">Сыграть в квиз</NavLink>
            <NavLink to="/kt2">Контрольная точка 2</NavLink>
            <NavLink to="/Books">Книга</NavLink>
            <NavLink to="/Users">Пользователи</NavLink>
            <NavLink to="/Cart">Корзина</NavLink>
            <NavLink to="/kt3">Контрольная точка 3</NavLink>
          </nav>
        </header>
        <main className="conteiner mx-auto">
          <Outlet />
        </main>
        <footer>
          <p>Все права защищены</p>
        </footer>
      </div>
    </CartContext>
  )
}
