import { axiosInstance } from "../../axios/axios";
import {AuthForm,passwordType,emailType,resetPasswordToken, OtpType,} from "../../types/routerType";
import axios from "axios";
import {apiSuccessMessage,apiErrorMessage,} from "../Notifications/apiMessages";
import { NavigateFunction  } from "react-router-dom";

export const registerUser = async (formData: AuthForm,navigate:NavigateFunction) => {debugger;
  try {
    const response = await axiosInstance.post(
      "/auth-services/register",
      formData
    );
    if (response.data && response.data.status) {
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      localStorage.setItem("user",JSON.stringify(response.data.user));
      apiSuccessMessage(response.data.message);
       navigate("/verify-email");
    }else {
      apiErrorMessage(response.data.message);
    }
   
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.error("Axios error:", err.response?.data.message || err.message);
      apiErrorMessage(err.response?.data.message);
    } else {
      console.error("Unexpected error:", err);
    }
  }
};

export const loginUser = async (formData: AuthForm) => {
  try {
    const response = await axiosInstance.post("/auth-services/login", formData);
    if (response.data && response.data.status) {
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      localStorage.setItem("user", response.data.user);
      apiSuccessMessage(response.data.message);
    }else {
      apiErrorMessage(response.data.message);
    }
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.error("Axios error:", err.response?.data?.data?.message || err.message);
      apiErrorMessage(err.response?.data?.data?.message || err.message);
    } else {
      console.error("Unexpected error:", err);
    }
  }
};

export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
  window.location.href = "/login";
};

export const sendForgetPasswordLink = async (email: emailType) => {
  try {
    const response = await axiosInstance.post("/auth-services/forgot-password",{ email: email });

    if (response.data && response.data.status) {
      apiSuccessMessage(response.data.message);
    } else {
      apiErrorMessage(response.data.message);
    }
  } catch (err) {
    apiErrorMessage("Failed to connect to the server.");
  }
};

export const verifyEmailTop = async (token: resetPasswordToken,password: passwordType,navigate:NavigateFunction) => {
  try {
    const response = await axiosInstance.post("/auth-services/reset-password", {
      token: token,
      password: password,
    });
    if (response.data && response.data.status) {
      apiSuccessMessage(response.data.message);
      navigate("/");
    } else {
      apiErrorMessage(response.data.message);
    }
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.error("Axios error:", err.response?.data || err.message);
      apiErrorMessage(err.response?.data.message);
    } else {
      console.error("Unexpected error:", err);
    }
  }
};

  export const verifyRegisterEmail = async (otp: OtpType,email: emailType,navigate:NavigateFunction) => {
    try {
      const response = await axiosInstance.post("/auth-services/verify-email", {
        email: email,
        verificationToken: otp,
      });
      if (response.data && response.data.status) {
          apiSuccessMessage(response.data.message);
          navigate("/");
      } else {
        apiErrorMessage(response.data.message);
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.error("Axios error:", err.response?.data || err.message);
        apiErrorMessage(err.response?.data.message);
      } else {
        console.error("Unexpected error:", err);
      }
    }
  }

