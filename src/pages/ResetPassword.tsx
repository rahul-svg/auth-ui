import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "../css/ResetPassword.css"; // Import CSS for styling
import {apiErrorMessage} from "../component/Notifications/apiMessages"
import { verifyEmailTop } from "../component/common/authCommon";
import { useNavigate ,NavigateFunction } from "react-router-dom";

const ResetPassword: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [token, setToken] = useState<string | null>(null);
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate:NavigateFunction = useNavigate();


  useEffect(() => {
    const tokenFromUrl = searchParams.get("token");
    setToken(tokenFromUrl);
  }, [searchParams]);

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      apiErrorMessage("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      apiErrorMessage("Passwords do not match.");
      return;
    }

    if (!token) {
      apiErrorMessage("Invalid or missing reset token.");
      return;
    }

    verifyEmailTop(token, password, navigate)
  
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
    {/*  {token ? (*/}
        <form onSubmit={handleResetPassword}>
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" >Reset Password</button>
        </form>
     {/* ) : (
        <p className="error-message">Invalid or expired reset link.</p>
      )}
     {message && <p className="success-message">{message}</p>} 
    {error && <p className="error-message">{error}</p>} */}
    </div>
  );
};

export default ResetPassword;
