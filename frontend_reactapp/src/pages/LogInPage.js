import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "../components/Layout";
import { setAuthToken } from "../helpers/setAuthToken";
function LogInPage() {
  const [usernameOrEmail, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const loginPayload = {
    name: "rufina12",
    username: "rufina012",
    email: "rufina252@gmail.com",
    password: "welcome",
    role_user: "welcome",
  };
  const handleSave = () => {
    setIsSaving(true);
    axios
      .post("/api/v1/auth/register", loginPayload)
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: "Menu details saved successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsSaving(false);
        //setUsername("");
        // setMenuname("");
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: error,
          showConfirmButton: false,
          timer: 1500,
        });
        setIsSaving(false);
      });
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
            value={usernameOrEmail}
            type="text"
            className="form-control"
            id="usernameOrEmail"
            name="usernameOrEmail"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Enter password</label>
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
