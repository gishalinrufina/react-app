import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "../components/Layout";

function Prs_coresprofobjRetrive() {
  const [prs_coresprofobjList, setPrs_coresprofobjList] = useState([]);

  useEffect(() => {
    fetchPrs_coresprofobjList();
  }, []);

  const fetchPrs_coresprofobjList = () => {
    axios
      .get("/api/personal_resume_management_system/prs_coresprofobj")
      .then(function (response) {
        setPrs_coresprofobjList(response.data);
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
          .delete(
            `/api/personal_resume_management_system/prs_coresprofobj/${id}`
          )
          .then(function (response) {
            Swal.fire({
              icon: "success",
              title: "Correspondence details deleted successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            fetchPrs_coresprofobjList();
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
        <h2 className="text-center mt-5 mb-3">Correspondence Details </h2>
        <div className="card">
          <div className="card-header">
            <Link
              className="btn btn-outline-primary"
              to="/prs_coresprofobjcreate"
            >
              Add correspondence details to your resume
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
                  <th>Correspondence</th>
                  <th>Profile</th>
                  <th>Objective</th>
                  <th width="240px">Action</th>
                </tr>
              </thead>
              <tbody>
                {prs_coresprofobjList.map((prs_coresprofobj, key) => {
                  return (
                    <tr key={key}>
                      <td>{prs_coresprofobj.usercode}</td>
                      <td>{prs_coresprofobj.correspondence}</td>
                      <td>{prs_coresprofobj.profile}</td>
                      <td>{prs_coresprofobj.objective}</td>
                      <td>
                        <Link
                          to={`/prs_coresprofobjview/${prs_coresprofobj.id}`}
                          className="btn btn-outline-info mx-1"
                        >
                          Show
                        </Link>
                        <Link
                          className="btn btn-outline-success mx-1"
                          to={`/prs_coresprofobjedit/${prs_coresprofobj.id}`}
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(prs_coresprofobj.id)}
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

export default Prs_coresprofobjRetrive;
