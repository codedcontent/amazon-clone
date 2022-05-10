import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Form values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  //   Reference to the auth service
  const auth = getAuth();

  const signIn = async (e) => {
    e.preventDefault();

    // Firebase sign-in
    try {
      signInWithEmailAndPassword(auth, email, password);

      // User signed in
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  //   Registration funtion
  const register = async (e) => {
    e.preventDefault();

    // Firebase register
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      // User registered
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon logo"
          className="login__logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing in you agree to the Amazon Dev Clone's Terms and
          conditions'
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
