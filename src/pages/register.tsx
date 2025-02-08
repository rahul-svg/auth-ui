import { FC, FormEvent, useState } from "react";
import { AuthForm } from "../types/routerType"
import { registerUser } from '../component/common/authCommon'


const loginForm: AuthForm = {
    email: "",
    password: "",
}

const Register: FC = () => {
    const [form, setForm] = useState(loginForm)
    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        registerUser(form)
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Register</h3>

            <div className="mb-3">
                <label>Email address</label>
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
                <label>Password</label>
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
            </div>

            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </div>

            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
            <p className="text-right">
               Already Account <a href="/">Login?</a>
           </p>
        </form>
    );
};

export default Register;