import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout";

function Prs_projectView() {
  const [id, setId] = useState(useParams().id);
  const [prs_project, setPrs_project] = useState({
    usercode: "",
    pname: "",
    techused: "",
    description: "",
    responsibility: "",
  });

  useEffect(() => {
    axios
      .get(`/api/personal_resume_management_system/prs_project/${id}`)
      .then(function (response) {
        setPrs_project(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <div className="container">
        <h2 className="text-center mt-5 mb-3">Show Project details</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-info float-right" to="/">
              {" "}
              View All details
            </Link>
          </div>
          <div className="card-body">
            <b className="text-muted">User Code:</b>
            <p>{prs_project.usercode}</p>
            <b className="text-muted">Project Name:</b>
            <p>{prs_project.pname}</p>
            <b className="text-muted">Technology used:</b>
            <p>{prs_project.techused}</p>
            <b className="text-muted">Description:</b>
            <p>{prs_project.description}</p>
            <b className="text-muted">Responsibility:</b>
            <p>{prs_project.responsibility}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Prs_projectView;
