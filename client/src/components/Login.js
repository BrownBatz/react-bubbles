import React, {useState} from "react";

import {axiosWithAuth} from "./axiosWithAuth";

import axios from "axios";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({"username": "", "password": ""});

  const login = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login", credentials)
      .then(res => {
        console.log(res.data);
        localStorage.setItem('token', res.data.payload);
        props.history.push("/bubblepage");
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  const handleChange = (e) => {
    e.preventDefault();
    setCredentials({...credentials, [e.target.name]: e.target.value});
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          />
        <input
          type="text"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
