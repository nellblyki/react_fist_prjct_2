import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { router } from "./router";
import './index.css'
import { Provider } from "react-redux";
import { store } from "./srores/store";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <RouterProvider router={router} />,
  </Provider>

);
