import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "../components/Layout";

function Prs_projectRetrive() {
  const [prs_projectList, setPrs_projectList] = useState([]);

  useEffect(() => {
    fetchPrs_projectList();
  }, []);

  const fetchPrs_projectList = () => {
    axios
      .get("/api/v1/project/prs_project")
      .then(function (response) {
        setPrs_projectList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/api/v1/project/prs_project/${id}`)
          .then(function (response) {
            Swal.fire({
              icon: "success",
              title: "Project details deleted successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            fetchPrs_projectList();
          })
          .catch(function (error) {
            Swal.fire({
              icon: "error",
              title: "An Error Occured!",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    });
  };

  return (
    <Layout>
      <div className="container">
        <h2 className="text-center mt-5 mb-3">Project Details </h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-primary" to="/prs_projectcreate">
              Add Project details to your resume
            </Link>
          </div>
          <div className="card-header">
            <Link className="btn btn-outline-primary" to="/home">
              Back to Home
            </Link>
          </div>
          <div className="card-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Usercode</th>
                  <th>Project Name</th>
                  <th>Technology used</th>
                  <th>Description</th>
                  <th>Responsibility</th>
                  <th width="240px">Action</th>
                </tr>
              </thead>
              <tbody>
                {prs_projectList.map((prs_project, key) => {
                  return (
                    <tr key={key}>
                      <td>{prs_project.usercode}</td>
                      <td>{prs_project.pname}</td>
                      <td>{prs_project.techused}</td>
                      <td>{prs_project.description}</td>
                      <td>{prs_project.responsibility}</td>

                      <td>
                        <Link
                          to={`/prs_projectview/${prs_project.id}`}
                          className="btn btn-outline-info mx-1"
                        >
                          Show
                        </Link>
                        <Link
                          className="btn btn-outline-success mx-1"
                          to={`/prs_projectedit/${prs_project.id}`}
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(prs_project.id)}
                          className="btn btn-outline-danger mx-1"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Prs_projectRetrive;
