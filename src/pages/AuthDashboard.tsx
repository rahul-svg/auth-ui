import { FC } from "react";
import '../css/AuthDashboard.css';
import { logout } from "../component/common/authCommon";

const AuthDashboard: FC = () => {
  const userDetails = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogOut = () => {
    logout();
  }

  return (
    <div className="auth-dashboard-container">
      <div className="card" >
      <div className="mb-2">
        <h2>Welcome, {userDetails?.username || "User"}!</h2>
      </div>
      <div className="mb-2">
        <p><strong>Email:</strong> {userDetails?.email || "Not available"}</p>
        </div>
        <div className="mb-2">
        <p><strong>Account Status:</strong> {userDetails?.isVerified ? "Verified" : "Not Verified"}</p>
      </div>
      <div className="mb-2">
       { <button type="submit" className="btn btn-success" onClick={handleLogOut}>
          Logout
        </button>}
      </div>
      </div>
    </div>
  );
};

export default AuthDashboard;