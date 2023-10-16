import './index.css';
import reportWebVitals from './reportWebVitals';
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AddProduct from './components/AddProduct';
import LikedProduct from './components/LikedProduct';
import ProductDetail from './components/ProductDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home/>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "/login",
    element:(<Login/>),
  },
  {
    path: "/signup",
    element:(<SignUp/>),
  },
  {
    path: "/add-product",
    element:(<AddProduct/>),
  },
  {
    path: "/liked-products",
    element:(<LikedProduct/>),
  },
  {
    path: "/product/:productId",
    element:(<ProductDetail/>),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
  );
  reportWebVitals();