import { useState } from "react";
import "../css/forgotPassword.css";
import {sendForgetPasswordLink} from "../component/common/authCommon" 

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendForgetPasswordLink(email)
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <p>Enter your email to receive a password reset link.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button style={{fontSize:"16px"}} type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
