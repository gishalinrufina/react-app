import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "../components/Layout";

function UsersettingCreate() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    axios
      .post("/api/personal_resume_management_system/usersetting", {
        username: username,
        password: password,
        email: email,
        mobileno: mobileno,
      })
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: "USer saved successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsSaving(false);
        setUsername("");
        setPassword("");
        setMobileno("");
        setEmail("");
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
    <Layout>
      <div className="container">
        <h2 className="text-center mt-5 mb-3">Create New User</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-info float-right" to="/">
              View All Users
            </Link>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="username">User Name</label>
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
                <label htmlFor="password">Password</label>
                <input
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  value={password}
                  type="text"
                  className="form-control"
                  id="password"
                  name="password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-Mail</label>
                <input
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  value={email}
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobileno">Mobile No</label>
                <input
                  onChange={(event) => {
                    setMobileno(event.target.value);
                  }}
                  value={email}
                  type="text"
                  className="form-control"
                  id="mobileno"
                  name="mobileno"
                />
              </div>
              <button
                disabled={isSaving}
                onClick={handleSave}
                type="button"
                className="btn btn-outline-primary mt-3"
              >
                Save User
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UsersettingCreate;
