import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Components/Shop/Shop";
import Layout from "./Components/Layout/Layout";
import Orders from "./Components/Orders/Orders";
import Inventory from "./Components/Inventory/Inventory";
import Login from "./Components/Login/Login";
import CartProductLoader from "./Loaders/CartProductLoder";
import Checkout from "./Components/Checkout/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        loader: CartProductLoader,
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "checkout",
        element: <Checkout></Checkout>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
