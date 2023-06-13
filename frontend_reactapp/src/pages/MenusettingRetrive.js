import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "../components/Layout";

function MenusettingRetrive() {
  const [menusettingList, setMenusettingList] = useState([]);

  useEffect(() => {
    fetchMenusettingList();
  }, []);

  const fetchMenusettingList = () => {
    axios
      .get("/api/personal_resume_management_system/menusetting")
      .then(function (response) {
        setMenusettingList(response.data);
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
          .delete(`/api/personal_resume_management_system/menusetting/${id}`)
          .then(function (response) {
            Swal.fire({
              icon: "success",
              title: "Menu Details deleted successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            fetchMenusettingList();
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
        <h2 className="text-center mt-5 mb-3">Menu Details </h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-primary" to="/menusettingcreate">
              Create New Menu
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
                  <th>Menuname</th>
                  <th width="240px">Action</th>
                </tr>
              </thead>
              <tbody>
                {menusettingList.map((menusetting, key) => {
                  return (
                    <tr key={key}>
                      <td>{menusetting.menucode}</td>
                      <td>{menusetting.menuname}</td>
                      <td>
                        <Link
                          to={`/menusettingview/${menusetting.id}`}
                          className="btn btn-outline-info mx-1"
                        >
                          Show
                        </Link>
                        <Link
                          className="btn btn-outline-success mx-1"
                          to={`/menusettingedit/${menusetting.id}`}
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(menusetting.id)}
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

export default MenusettingRetrive;
