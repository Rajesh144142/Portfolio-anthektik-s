import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import {baseUrl} from '../utils/constant'
import { setAuthentication } from "../utils/auth";
// import { isLogin } from "../utils/auth";
const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form Data:", formData);
  
    axios
      .post(`${baseUrl}auth/signin`, formData)
      .then((response) => {
        // Handle the login response here
        setAuthentication(response.data.token);
        navigate('../Admin');

      })
      .catch((error) => {
        // Handle login error here
        console.error("Login error:", error);
      });
  };
  const haldleNavigate=()=>{
    navigate('/anthektikós')
  }
  
  // useEffect(() => {
  //   // Your login POST request goes here
  //   axios.post('/auth/signin', formData
  //   )
  //   .then((response) => {
  //     // Handle the login response here
  //     console.log('Login response:', response.data);
  //   })
  //   .catch((error) => {
  //     // Handle login error here
  //     console.error('Login error:', error);
  //   });
  // }, []);

  return (
    <div className="hero min-h-screen bg-base-200  ">
      <div className="absolute top-2 z-50 left-4 cursor-pointer btn btn-info btn-sm" onClick={haldleNavigate}>Back</div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mt-3">Login now! (Only Admin)</h1>
          <p className="py-6">
          Every action you take today shapes the digital landscape of tomorrow. Be the architect of positive change.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  value={formData.password}
                  onChange={handleChange}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
