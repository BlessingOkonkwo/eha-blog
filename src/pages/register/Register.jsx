import React, { useState } from 'react'
import "./register.css"
import { Link } from 'react-router-dom'
import api from "../../api/api"

const Register = () => {
  const [username, setUsername]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await api.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit} className="registerForm">
        <label htmlFor="">Username</label>
        <input type="text" className="registerInput" placeholder="Enter your username..." onChange={e => setUsername(e.target.value)} />
        <label htmlFor="">Email</label>
        <input type="text" className="registerInput" placeholder="Enter your email..." onChange={e => setEmail(e.target.value)} />
        <label htmlFor="">Password</label>
        <input type="password" className="registerInput" placeholder="Enter your password..." onChange={e => setPassword(e.target.value)} />
        <button className="registerButton" type="submit">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">Login</Link>
      </button>

      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  )
}

export default Register
