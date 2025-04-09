import { FC, FormEvent,useState } from "react";
import {AuthForm} from "../types/routerType"
import "../css/Login.css"

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
    <div className="card">
    <form onSubmit={handleSubmit}>
       <h2>Login</h2>

      <div className="mb-2">
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

      <div className="mb-2">
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

      <div className="mb-2">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input checkmark"
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
      
      <div className="mb-2 redirectSection">
        <p className="forgot-password linkParagraph">
           Forgot <a href="/forgot-password">Password?</a>
       </p>
        <p className="linkParagraph">
          New <a href="/register">Register?</a>
        </p> 
      </div>
      </form>
    </div>
  );
};

export default Login;
