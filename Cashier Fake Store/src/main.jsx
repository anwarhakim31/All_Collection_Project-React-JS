import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import NotFound from "./pages/404.jsx";
import ProductsPage from "./pages/products.jsx";
import { DetailProductPage } from "./pages/DetailProduct.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import DarkModeContextProvider from "./context/DarkMode.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <div>E</div>,
    errorElement: <NotFound />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },

  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <RouterProvider router={Router} />
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);
