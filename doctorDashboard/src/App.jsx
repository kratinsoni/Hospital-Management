import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm.jsx";
import { Context } from "./main";
import axios from "axios";
import DoctorDashboard from "./components/DoctorDashboard.jsx";

//setting up react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { URL } from "../constants.js";

import "./App.css";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, doctor, setDoctor } =
    useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${URL}/user/doctor/me`, {
          withCredentials: true,
        });
        console.log(response.data.user);
        setIsAuthenticated(true);
        setDoctor(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setDoctor({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);
  //whenever the value of isAAuthenticated changes that is the page refreshes itself, we get the admin here and check is it authenticated or not

  ////// the first thing is we write the routes
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DoctorDashboard doctor={doctor} />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
};

export default App;
