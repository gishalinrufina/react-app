import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout";

function UsersettingView() {
  const [id, setId] = useState(useParams().id);
  const [usersetting, setUsersetting] = useState({
    username: "",
    password: "",
    email: "",
    mobileno: "",
  });

  useEffect(() => {
    axios
      .get(`/api/personal_resume_management_system/usersetting/${id}`)
      .then(function (response) {
        setUsersetting(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <div className="container">
        <h2 className="text-center mt-5 mb-3">Show Users</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-info float-right" to="/">
              {" "}
              View All Users
            </Link>
          </div>
          <div className="card-body">
            <b className="text-muted">User Name:</b>
            <p>{usersetting.username}</p>
            <b className="text-muted">Password:</b>
            <p>{usersetting.password}</p>
            <b className="text-muted">Email:</b>
            <p>{usersetting.email}</p>
            <b className="text-muted">Mobile No:</b>
            <p>{usersetting.mobileno}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UsersettingView;
