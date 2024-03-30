import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main.jsx";
import Home from "../pages/Home/Home.jsx";
import Menu from "../pages/Menu/Menu.jsx";
import Order from "../pages/Order/Order.jsx";
import Login from "../pages/Login/Login.jsx";
import SignUp from "../pages/SignUp/SignUp.jsx";
import Dashboard from "../layouts/Dashboard.jsx";
import Cart from "../pages/Dashboard/Cart.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Users from "../pages/Dashboard/Users.jsx";
import AddItems from "../pages/Dashboard/AddItems.jsx";
import AdminRoute from "./AdminRoute.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      { path: "cart", element: <Cart /> },
      {
        path: "users",
        element: (
          <AdminRoute>
            <Users />
          </AdminRoute>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
    ],
  },
]);
