import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "../components/Layout";

function Prs_technicalRetrive() {
  const [prs_technicalList, setPrs_technicalList] = useState([]);

  useEffect(() => {
    fetchPrs_technicalList();
  }, []);

  const fetchPrs_technicalList = () => {
    axios
      .get("/api/personal_resume_management_system/prs_technical")
      .then(function (response) {
        setPrs_technicalList(response.data);
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
          .delete(`/api/personal_resume_management_system/prs_technical/${id}`)
          .then(function (response) {
            Swal.fire({
              icon: "success",
              title: "Technical details deleted successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            fetchPrs_technicalList();
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
        <h2 className="text-center mt-5 mb-3">Technical Details </h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-primary" to="/prs_technicalcreate">
              Add technical details to your resume
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
                  <th>Type</th>
                  <th>Description</th>

                  <th width="240px">Action</th>
                </tr>
              </thead>
              <tbody>
                {prs_technicalList.map((prs_technical, key) => {
                  return (
                    <tr key={key}>
                      <td>{prs_technical.usercode}</td>
                      <td>{prs_technical.type}</td>
                      <td>{prs_technical.description}</td>

                      <td>
                        <Link
                          to={`/prs_technicalview/${prs_technical.id}`}
                          className="btn btn-outline-info mx-1"
                        >
                          Show
                        </Link>
                        <Link
                          className="btn btn-outline-success mx-1"
                          to={`/prs_technicaledit/${prs_technical.id}`}
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(prs_technical.id)}
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

export default Prs_technicalRetrive;
