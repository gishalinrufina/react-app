import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "../components/Layout";

function Prs_educationRetrive() {
  const [prs_educationList, setPrs_educationList] = useState([]);

  useEffect(() => {
    fetchPrs_educationList();
  }, []);

  const fetchPrs_educationList = () => {
    axios
      .get("/api/prs_education")
      .then(function (response) {
        setPrs_educationList(response.data);
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
          .delete(`/api/prs_education/${id}`)
          .then(function (response) {
            Swal.fire({
              icon: "success",
              title: "Education Details deleted successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            fetchPrs_educationList();
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
        <h2 className="text-center mt-5 mb-3">Education Details </h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-primary" to="/prs_educationcreate">
              Add a new education detail
            </Link>
          </div>
          <div className="card-header">
            <Link className="btn btn-outline-primary" to="/">
              Back to Home
            </Link>
          </div>
          <div className="card-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Usercode</th>
                  <th>UG</th>
                  <th>PG</th>
                  <th>HSC</th>
                  <th>SSLC</th>

                  <th width="240px">Action</th>
                </tr>
              </thead>
              <tbody>
                {prs_educationList.map((prs_education, key) => {
                  return (
                    <tr key={key}>
                      <td>{prs_education.usercode}</td>
                      <td>{prs_education.ug}</td>
                      <td>{prs_education.pg}</td>
                      <td>{prs_education.hsc}</td>
                      <td>{prs_education.sslc}</td>
                      <td>
                        <Link
                          to={`/prs_educationview/${prs_education.id}`}
                          className="btn btn-outline-info mx-1"
                        >
                          Show
                        </Link>
                        <Link
                          className="btn btn-outline-success mx-1"
                          to={`/prs_educationedit/${prs_education.id}`}
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(prs_education.id)}
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

export default Prs_educationRetrive;
