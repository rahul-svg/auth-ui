import React from 'react';
import '../../styles/LoginForm.css'

function LoginForm() {
    return (
        <div className="login-container">
            <form className="login-form">
                <h2>Login</h2>
                <label htmlFor="email">Email ID:</label>
                <input type="email" id="email" name="email" placeholder="Enter email address" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter password" required />

                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" name="remember" /> Remember me.
                    </label>
                    <a href="#" className="forgot-password">Forgot Password?</a>
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
