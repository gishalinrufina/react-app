import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "../components/Layout";

function Prs_experienceRetrive() {
  const [prs_experienceList, setPrs_experienceList] = useState([]);

  useEffect(() => {
    fetchPrs_experienceList();
  }, []);

  const fetchPrs_experienceList = () => {
    axios
      .get("/api/personal_resume_management_system/prs_experience")
      .then(function (response) {
        setPrs_experienceList(response.data);
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
          .delete(`/api/personal_resume_management_system/prs_experience/${id}`)
          .then(function (response) {
            Swal.fire({
              icon: "success",
              title: "Experience Details deleted successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            fetchPrs_experienceList();
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
        <h2 className="text-center mt-5 mb-3">Experience Details </h2>
        <div className="card">
          <div className="card-header">
            <Link
              className="btn btn-outline-primary"
              to="/prs_experiencecreate"
            >
              Add new experience detail
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
                  <th>Company name</th>
                  <td>From Date</td>
                  <td>To Date</td>
                  <td> Designation</td>
                  <th width="240px">Action</th>
                </tr>
              </thead>
              <tbody>
                {prs_experienceList.map((prs_experience, key) => {
                  return (
                    <tr key={key}>
                      <td>{prs_experience.usercode}</td>
                      <td>{prs_experience.companyname}</td>
                      <td>{prs_experience.fromdate}</td>
                      <td>{prs_experience.todate}</td>
                      <td>{prs_experience.designation}</td>
                      <td>
                        <Link
                          to={`/prs_experienceview/${prs_experience.id}`}
                          className="btn btn-outline-info mx-1"
                        >
                          Show
                        </Link>
                        <Link
                          className="btn btn-outline-success mx-1"
                          to={`/prs_experienceedit/${prs_experience.id}`}
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(prs_experience.id)}
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

export default Prs_experienceRetrive;
