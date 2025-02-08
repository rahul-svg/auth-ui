import { FC, FormEvent,useState } from "react";
import {AuthForm} from "../types/routerType"

import {loginUser} from '../component/common/authCommon'

const authForm:AuthForm= {
email:"",
password:"",
}

const Login: FC = () => {
    const [form,setForm] = useState(authForm)

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
      };
      

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginUser(form)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>

      <div className="mb-2">
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

      <div className="mb-2">
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

      <div className="mb-2">
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
        New <a href="/register">Register?</a>
      </p>
    </form>
  );
};

export default Login;
