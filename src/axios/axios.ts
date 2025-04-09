import axios from 'axios';



// Create the axios instance

export const axiosInstance = axios.create({
    baseURL:'https://auth-services-u1yh.onrender.com',
    withCredentials: true, 
    headers:{'Content-Type':'application/json'}
})



// Add a request interceptor
axiosInstance.interceptors.request.use(
    function(config){
        const token = localStorage.getItem('auth-token')
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    function (error){
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.request.use(
    (response) => response,
    async(error) => {
        const originalRequest = error.config;
        if(error.response?.status && !originalRequest._retry){
            originalRequest._retry = true; 
            try{
                const refreshToken = localStorage.getItem("refreshToken");
                const response = await axiosInstance.post("https://auth-services-u1yh.onrender.com/auth-services/refreshToken", { refreshToken });
                localStorage.setItem("accessToken", response.data.accessToken);

                // Retry the original request with new token
                axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${response.data.accessToken}`;
                return axiosInstance(originalRequest);
            }catch(err){
                console.error("Token refresh failed:", err);
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                localStorage.removeItem("user");
                window.location.href = "/login";
            }
        }
        return Promise.reject(error);
    }

)
