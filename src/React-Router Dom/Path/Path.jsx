import Home from "../Home/Home.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import Products from "../Products/Products.jsx";
import Login from "../Login/Login.jsx";

export const path = [
  {
    id: "1",
    path: "/",
    title: "Home",
    element: <Home />,
  },
  {
    id: "2",
    path: "products",
    title: "Products",
    element: <Products />,
  },
  {
    id: "3",
    path: "navbar",
    title: "Navbar",
    element: <Navbar />,
  },
  {
    id: "4",
    path: "login",
    title: "Login",
    element: <Login />,
  },
];
