import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginService from "../login/services/login";
import logo from '../../assets/logo.png'
import './Signin.css'

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        email:"test1@test.com",
        password:"contra123"
      })
      console.log(user);
      setUser(user);
      setEmail("");
      setPassword("");
    } catch (e) {
      console.log("inicio de sesion incorrecto")
      setErrorMessage("Credenciales Incorrectas");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  return (
    <div className="container-main">
      <div className="container-sidebar">
        <div className="form">
          <h3>Sign In</h3>
          <h3>Master Jedi</h3>
          {/* <Notification message={errorMessage}/> notificacion de mensaje erroneo */}
          <form onSubmit={handleLogin}>
            <label htmlFor="email"></label>
            <div className="container-inputs">
              <input className="style-input"
                type="email"
                placeholder="E-mail:"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                required
              />
            </div>
            <label htmlFor="password"></label>
            <div className="container-inputs">
            <input className="style-input"
              type="password"
              placeholder="Password:"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              required
            />
            </div>
            <Link to='/dashboard'>
            <button type="submit">Sign in</button>
            </Link>
          </form>
        </div>
        <div className="terms">by signin in, i agree the terms of service</div>
        <h4>
          No account?
          
            <span> Contact your admin</span>
          
        </h4>
      </div>
      <div className='logo-main'>
        <img src={logo}
        />
        <h1>Dev-School</h1>
      </div>
  </div>
  );
}

export default Signin;
