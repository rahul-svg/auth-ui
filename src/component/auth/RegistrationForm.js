import React from 'react';
import '../../styles/RegistrationForm.css'

function RegistrationForm() {
    return (
        <div className="signup-container">
        <form className="signup-form">
            <h2>Sign Up</h2>

            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter username" required />

            <label htmlFor="email">Email ID:</label>
            <input type="email" id="email" name="email" placeholder="Enter email address" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter password" required />

            <button type="submit">Sign Up</button>
        </form>
    </div>
    );
}

export default RegistrationForm;