import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LogInPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const expectedUserName = "admin";
  const expectedPassword = "welcome";

  const handleSave = () => {
    if (username === expectedUserName && password === expectedPassword) {
      console.log("Login successful");
      navigate("/home");
      // <Link to="/home">Link to home page</Link>;
    } else {
      console.log("Register");
      <Link to="/usersettingcreate"> Link to user registration</Link>;
    }
  };
  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-3">
        Welcome to Resume management system
      </h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Enter Username</label>
          <input
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            value={username}
            type="text"
            className="form-control"
            id="username"
            name="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor={password}>Enter password</label>
          <input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
            type="password"
            className="form-control"
            id="password"
            name="password"
          />
        </div>
        <button
          onClick={handleSave}
          type="button"
          className="btn btn-outline-primary mt-3"
        >
          {" "}
          Login
        </button>
      </form>
    </div>
  );
}
export default LogInPage;
