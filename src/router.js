import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import indexpage from "./pages/indexpage";
import AdminPage from "./pages/AdminPage";
import MainLoyout from "./pages/MainLoyout";
import About from "./pages/About";
import ToDo from "./ToDOList";
import Convert from "./convirtation";
import quizes from "./pages/quizes";
import CreateQuiz from "./pages/CreateQuiz";
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
        Component: quizes
      },
      {
        path: "createquizes",
        Component: CreateQuiz
      }

    ]
  }


]);

const root = document.getElementById("root");


