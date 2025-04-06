import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { URL } from "../../constants.js";


// LOGIN PAGE IS FOR PATIENTS ONLY

const Login = () => {

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
                     //The useContext Hook is used to get the current authentication status (isAuthenticated) and a function to update it (setIsAuthenticated) from a shared context.
  const [email, setEmail] = useState("");
                     //   email: Stores the email entered by the user.
                     // password: Stores the password entered by the user.
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigateTo = useNavigate();





///////////////////////////////////////////function for login

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          `${URL}/user/login`,
          { email, password, confirmPassword, role: "Patient" },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };



//////////////////////////////// if user already authenticated they will NOT be directed to login page

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }



  return (
    <>
      <div className="container form-component login-form">
        <h2>Sign In</h2>
        <p>Please enter your e-mail and password.</p>
        <p>
        By signing in to Sanjeevani Medical Institute, you agree to abide by our Terms & Conditions and Privacy Policy.
        </p>
        <form onSubmit={handleLogin}>  {/* Whenever onSubmit, it will run the handleLOGIN function */}
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div     
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Not Registered?</p>
            <Link
              to={"/register"}
              style={{ textDecoration: "none", color: "#271776ca" }}
            >
              Register Now
            </Link>
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;