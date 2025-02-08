import  {axiosInstance} from '../../axios/axios';
import {AuthForm} from "../../types/routerType"
import axios from "axios";
import {apiSuccessMessage,apiErrorMessage} from '../Notifications/apiMessages'



export const registerUser = async (formData: AuthForm) => {
  try {
      const response = await axiosInstance.post("/auth-services/register", formData);
      if(response.data && response.data.status){
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        apiSuccessMessage(response.data.message);
      }
      console.log("Register successful:", response.data);
      
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
        console.error("Axios error:", err.response?.data || err.message);
    } else {
        console.error("Unexpected error:", err);
    }
}
};

export const loginUser = async (formData: AuthForm) => {
  try {
      const response = await axiosInstance.post("/auth-services/login", formData);debugger;
      if(response.data && response.data.status){
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        apiSuccessMessage(response.data.message);
      }
      console.log("Login successful:", response.data);
      
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
        console.error("Axios error:", err.response?.data || err.message);
        apiErrorMessage(err.message)
    } else {
        console.error("Unexpected error:", err);
    }
}
};



export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  window.location.href = "/login"; 
};
