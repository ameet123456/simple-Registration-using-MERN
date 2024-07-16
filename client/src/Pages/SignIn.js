import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      console.log(name, email, phone, pass);
      const res = await axios.post("http://localhost:5000/api/User/Signin", {  name, email, mob: phone, password: pass });
      if (res && res.data.success) {
        navigate("/Login");
      }else {
        console.log("Something went wrong:", res.data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="input">
        <h1>Sign In</h1>
        <form onSubmit={handleSumbit}>
          <div className="txt_field">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span></span>
            <label>Enter Name</label>
          </div>
          <div className="txt_field">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span></span>
            <label>Enter Email</label>
          </div>
          <div className="txt_field">
            <input
              type="number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <span></span>
            <label>Enter Mobile Number</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              required
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <span></span>
            <label>Enter Password</label>
          </div>
          <input type="submit" value="Sign In" />
        </form>
        <div className="signup_link">
          Already a member?
          <Link to="/Login">Log In</Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
