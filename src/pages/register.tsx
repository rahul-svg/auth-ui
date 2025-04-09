import { FC, FormEvent, useState } from "react";
import { AuthForm } from "../types/routerType"
import { registerUser } from '../component/common/authCommon'
import { useNavigate,NavigateFunction } from "react-router-dom";


const loginForm: AuthForm = {
    username:"",
    email: "",
    password: "",
    confirmPassword:"",
}

const Register: FC = () => {
    const [form, setForm] = useState(loginForm);

    const navigate:NavigateFunction = useNavigate();
    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(form.password !== form.confirmPassword){
            alert('Passwords do not match');
           return;
        }
        delete form.confirmPassword;
         registerUser(form,navigate);
         setForm(loginForm);
    };

    return (
        <div className="card">
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div className="mb-3">
                <label>User name:</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter user name"
                    required
                    value={form.username}
                    name="username"
                    onChange={handleFormChange}
                />
            </div>
            <div className="mb-3">
                <label>Email address:</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    required
                    value={form.email}
                    name="email"
                    onChange={handleFormChange}
                />
            </div>

            <div className="mb-3">
                <label>Password:</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    required
                    value={form.password}
                    name="password"
                    onChange={handleFormChange}
                />
            </div>

            <div className="mb-3">
                <label>Confirm Password:</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter confirm password"
                    required
                    value={form.confirmPassword}
                    name="confirmPassword"
                    onChange={handleFormChange}
                />
            </div>

            {/* <div className="mb-3">
                <div className="custom-control custom-checkbox">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                    />
                    <label className="custom-control-label" htmlFor="customCheck1">
                        Remember me
                    </label>
                </div>
            </div> */}

            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </div>
            <div className="mb-2 redirectSection">
                {/* <p className="forgot-password linkParagraph">
                    Forgot <a href="#">password?</a>
                </p> */}
                <p className="linkParagraph">
                Already Account <a href="/">Login?</a>
            </p>
           </div>
        </form>
     </div>
    );
};

export default Register;