import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "../components/Layout";

function UsersettingEdit() {
  const [id, setId] = useState(useParams().id);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/personal_resume_management_system/usersetting/${id}`)
      .then(function (response) {
        let usersetting = response.data;
        setId(usersetting.id);
        setUsername(usersetting.username);
        setPassword(usersetting.password);
        setEmail(usersetting.email);
        setMobileno(usersetting.mobileno);
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: error,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }, []);

  const handleSave = () => {
    setIsSaving(true);
    axios
      .put(`/api/personal_resume_management_system/usersetting/${id}`, {
        username: username,
        password: password,
        email: email,
        mobileno: mobileno,
      })
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: "User Details updated successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsSaving(false);
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
        <h2 className="text-center mt-5 mb-3">Edit Users</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-info float-right" to="/home">
              View All users
            </Link>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">User Name</label>
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
                <label htmlFor="name">Password</label>
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
                <label htmlFor="name">E-Mail</label>
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
                  value={mobileno}
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
                className="btn btn-outline-success mt-3"
              >
                Update User Detail
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UsersettingEdit;
