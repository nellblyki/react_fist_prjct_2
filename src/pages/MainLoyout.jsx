import { NavLink, Outlet } from "react-router";
import { CartContext } from "../components/Store";
import { useState } from "react";
export default function MainLoyout() {
  const [Cart,SetCart] = useState([])
  return (
    <CartContext value={[Cart,SetCart]}>
      <div>
        <header className="flex justify-center gap-x-5 py-4 mb-10">
          <div className="text-2xl font-bold items-center"><NavLink to="/">LOGO</NavLink></div>
          <nav className="flex gap-x-4 ">
            <NavLink to="/admin">Админка</NavLink>
            <NavLink to="/about">о нас</NavLink>
            <NavLink to="/ToDo">ТуДу лист</NavLink>
            <NavLink to="/Convert">Конвертер</NavLink>
            <NavLink to="/quizes">Сыграть в квиз</NavLink>
            <NavLink to="/kt2">КТ 2</NavLink>
            <NavLink to="/Books">Книга</NavLink>
            <NavLink to="/Users">Пользователи</NavLink>
            <NavLink to="/Cart">Корзина</NavLink>
            <NavLink to="/products">КТ 3</NavLink>
            <NavLink to="/LeetSpeak">Leet Speak</NavLink>
            <NavLink to="/ProductsPage">Страница товаров</NavLink>
            <NavLink to="/ProductCart">Корзина товаров</NavLink>
            <NavLink to='/Cats'>КТ 5</NavLink>
          </nav>
        </header>
        <main className="conteiner mx-auto">
          <Outlet />
        </main>
        <footer className="ml-4">
          <p>Все права защищены</p>
        </footer>
      </div>
    </CartContext>
  )
}
