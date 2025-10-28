import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import indexpage from "./pages/indexpage";
import AdminPage from "./pages/AdminPage";
import MainLoyout from "./pages/MainLoyout";
import About from "./pages/About";
import ToDo from "./ToDOList";
import Convert from "./convirtation";
import CreateQuizPage from "./pages/CreateQuizPage";
import playQuizPage from "./pages/playQuizPage";
import QuizesPage from "./pages/QuizesPage";
import { Component } from "react";
import kt2 from "./kt2/kt2";
import fetch from "./components/Books";
import Books from "./components/Books";
import BooksID from "./components/BooksID";
import Users from "./components/Users";
import UserID from "./components/UserID";
import Cart from "./components/Cart";
import kt3 from "./kt3/kt3";
export const router = createBrowserRouter([
  {
     
  },
  {
    Component: MainLoyout,
    children:[
      {
        index: true,
        Component: indexpage
     },
      {
        path: "admin",
        Component: AdminPage
      },
      {
        path: "about",
        Component: About
      },
      {
        path: "todo",
        Component: ToDo
      },
      {
        path: "Convert",
        Component: Convert
      },
      {
        path: "quizes",
        Component: QuizesPage
      },
      {
        path: "createquizes",
        Component: CreateQuizPage
      },
      {
        path: "quizes/:id",
        Component: playQuizPage
      },
      { path: "kt2",
        Component: kt2
      },
      {
        path: "Books",
        Component: Books
      },
      {
        path: "Books/:id",
        Component: BooksID
      },
      {
        path: "Users",
        Component: Users
      },
      {
        path: "Users/:id",
        Component: UserID
      },
      {
        path: "Cart",
        Component: Cart
      },
      {
        path: "kt3",
        Component: kt3
      }

    ]
  }


]);



