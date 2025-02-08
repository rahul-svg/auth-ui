import { createBrowserRouter } from "react-router-dom";
import { CustomRouteObject } from "../types/routerType"; 
import Login from "../pages/login";
import Register from "../pages/register"; 

// Define routes with proper typing
const routes: CustomRouteObject[] = [
  {
    path: "/",
    element: <Login />, 
    name: "Login",
  },{
    path: "/register",
    element: <Register />, 
    name: "Register",
  },
];

export const router = createBrowserRouter(routes);
