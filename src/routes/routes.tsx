import { createBrowserRouter } from "react-router-dom";
import { CustomRouteObject } from "../types/routerType"; 
import Login from "../pages/login";
import Register from "../pages/register"; 
import EmailOtpVerification from "../pages/EmailOtpVerification";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import AuthDashboard from "../pages/AuthDashboard";

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
  {
    path: "/verify-email",
    element: <EmailOtpVerification />, 
    name: "VerifyEmail",
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />, 
    name: "ForgetPassword",
  },
  {
    path: "/reset-password",
    element: <ResetPassword />, 
    name: "ResetPassword",
  },
  {
    path: "/auth-dashbaord",
    element: <AuthDashboard />, 
    name: "AuthDashboard",
  },
];

export const router = createBrowserRouter(routes);
