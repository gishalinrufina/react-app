import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "../components/Layout";

function UsersettingRetrive() {
  const [usersettingList, setUsersettingList] = useState([]);

  useEffect(() => {
    fetchUsersettingList();
  }, []);

  const fetchUsersettingList = () => {
    axios
      .get("/api/personal_resume_management_system/usersetting")
      .then(function (response) {
        setUsersettingList(response.data);
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
          .delete(`/api/personal_resume_management_system/usersetting/${id}`)
          .then(function (response) {
            Swal.fire({
              icon: "success",
              title: "User Details deleted successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            fetchUsersettingList();
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
        <h2 className="text-center mt-5 mb-3">User Details </h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-primary" to="/usersettingcreate">
              Create New User
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
                  <th>Name</th>
                  <th>Paasword</th>
                  <th>Email ID</th>
                  <th>Mobile no</th>
                  <th width="240px">Action</th>
                </tr>
              </thead>
              <tbody>
                {usersettingList.map((usersetting, key) => {
                  return (
                    <tr key={key}>
                      <td>{usersetting.username}</td>
                      <td>{usersetting.password}</td>
                      <td>{usersetting.email}</td>
                      <td>{usersetting.mobileno}</td>
                      <td>
                        <Link
                          to={`/usersettingview/${usersetting.id}`}
                          className="btn btn-outline-info mx-1"
                        >
                          Show
                        </Link>
                        <Link
                          className="btn btn-outline-success mx-1"
                          to={`/usersettingedit/${usersetting.id}`}
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(usersetting.id)}
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

export default UsersettingRetrive;
