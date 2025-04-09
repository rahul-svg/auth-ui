import React, {  FC,useState } from "react";
import "../css/EmailOtpVerification.css"; // Import the CSS file
import {OtpType} from "../types/routerType";
import { verifyRegisterEmail } from "../component/common/authCommon";
import { useNavigate ,NavigateFunction } from "react-router-dom";

const EmailOtpVerification : FC = () => {
  
  const [otp, setOtp] = useState<OtpType>("");  // State for OTP input
   const navigate:NavigateFunction = useNavigate();
  const storedUser = localStorage.getItem("user"); // Get the string from localStorage
  const user = storedUser ? JSON.parse(storedUser) : null; // Parse only if not null


 

  // Handle OTP input change
  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  // Verify OTP when user submits
  const handleVerifyOtp = async () => {
    if (!otp) {
      console.error("Enter Otp!");
      return;
    }
    const email = user?.email ?? "";
    if(email){
      verifyRegisterEmail(otp,email,navigate);
    }else{
      console.error("Error Occured!");
      return;
    }
   
  };

  return (
    <div className="otp-container">
      <h2>Email OTP Verification</h2>
      <p>Please enter the OTP sent to your email.</p>

      <input
        type="text"
        value={otp}
        onChange={handleOtpChange}
        maxLength={6}
        placeholder="Enter OTP"
        className="otp-input"
      />


      <button onClick={handleVerifyOtp} className="verify-btn">
        Verify OTP
      </button>
    </div>
  );
};

export default EmailOtpVerification;
