import { RouteObject } from "react-router-dom";

export type CustomRouteObject = RouteObject & {
  name: string; 
};

export interface AuthState {
  isLoggedIn: boolean;
}

export interface AuthForm {
  email:string;
  password:string;
}
