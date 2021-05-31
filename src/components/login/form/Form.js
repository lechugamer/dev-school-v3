import React, { useState } from "react";
import Inputs from "../inputs/Inputs";
import { Link } from "react-router-dom";
import loginService from "../../../services/login";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        email: "test1@test.com", 
        password: "contra123" 
      });
      setUser(user);
      setEmail("test1@test.com");
      setPassword("contra123");
      console.log(user)
    } catch (e) {
      setErrorMessage("Credenciales Incorrectas");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  return (
    <div className="container-sidebar">
      <div className="form">
        <h2>Login</h2>
        <h2>Master Jedi</h2>
        {/* <Notification message={errorMessage}/> notificacion de mensaje erroneo */}
        <form onSubmit={handleLogin}>
          <label htmlFor="email"></label>
          <Inputs
            placeholder="Email:"
            name="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            required
          />
          <label htmlFor="password"></label>
          <Inputs
            type="password"
            placeholder="Password:"
            name="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            required
          />
          <button type="submit">Sign in</button>
        </form>
      </div>
      <h4>
        Create an account?
        <Link>
          <span> Sign up</span>
        </Link>
      </h4>
    </div>
  );
}

export default Form;
