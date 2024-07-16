import axios from 'axios';
import React, { useState } from "react";
import { json, Link, useNavigate } from "react-router-dom";
import { useAuth } from './Contex/State';

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      console.log("Logging in with:", { email, password: pass });
      const res = await axios.post("http://localhost:5000/api/User/login", { email, password: pass });

      console.log("Response received:", res);
      if (res && res.data.success) {
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem('auth',JSON.stringify(res.data))
        console.log("Login successful:", res.data);
        navigate("/");
      } else {
        console.log("Something went wrong:", res.data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="input">
        <h1>Login</h1>
        <form onSubmit={handleSumbit}>
          <div className="txt_field">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span></span>
            <label>UserName</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              required
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <span></span>
            <label>Password</label>
          </div>
          <input type="submit" value="Login" />
          <div className="signup_link">
            Not a member?
            <Link to="/SignIn">Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
