import { RouteObject } from "react-router-dom";

export type CustomRouteObject = RouteObject & {
  name: string; 
};

export interface AuthState {
  isLoggedIn: boolean;
}

export interface AuthForm {
  username?:string,
  email:string;
  password:string;
  confirmPassword?:string;
}

export type OtpType = string;

export type emailType = string;

export type resetPasswordToken = string | null;

export type passwordType = string;
