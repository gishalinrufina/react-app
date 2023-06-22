import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "../components/Layout";

function SubmenusettingRetrive() {
  const [submenusettingList, setSubmenusettingList] = useState([]);

  useEffect(() => {
    fetchSubmenusettingList();
  }, []);

  const fetchSubmenusettingList = () => {
    axios
      .get("/api/v1/submenu/submenusetting")
      .then(function (response) {
        setSubmenusettingList(response.data);
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
          .delete(`/api/v1/submenu/submenusetting/${id}`)
          .then(function (response) {
            Swal.fire({
              icon: "success",
              title: "Submenu details deleted successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            fetchSubmenusettingList();
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
        <h2 className="text-center mt-5 mb-3">Sub menu Details </h2>
        <div className="card">
          <div className="card-header">
            <Link
              className="btn btn-outline-primary"
              to="/submenusettingcreate"
            >
              Add sub menu details to your resume
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
                  <th>Menucode</th>
                  <th>Submenu name</th>
                  <th>URL</th>

                  <th width="240px">Action</th>
                </tr>
              </thead>
              <tbody>
                {submenusettingList.map((submenusetting, key) => {
                  return (
                    <tr key={key}>
                      <td>{submenusetting.menucode}</td>
                      <td>{submenusetting.submenuname}</td>
                      <td>{submenusetting.url}</td>

                      <td>
                        <Link
                          to={`/submenusettingview/${submenusetting.id}`}
                          className="btn btn-outline-info mx-1"
                        >
                          Show
                        </Link>
                        <Link
                          className="btn btn-outline-success mx-1"
                          to={`/submenusettingedit/${submenusetting.id}`}
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(submenusetting.id)}
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

export default SubmenusettingRetrive;
