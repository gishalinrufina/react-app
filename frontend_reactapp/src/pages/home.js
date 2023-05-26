import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "../components/Layout";

function Home() {
  // const [usersettingList, setUsersettingList] = useState([]);

  // useEffect(() => {
  //   fetchUsersettingList();
  // }, []);

  // const fetchUsersettingList = () => {
  //   axios
  //     .get("/api/user-setting")
  //     .then(function (response) {
  //       setUsersettingList(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  // const handleDelete = (id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       axios
  //         .delete(`/api/user-setting/${id}`)
  //         .then(function (response) {
  //           Swal.fire({
  //             icon: "success",
  //             title: "User Details deleted successfully!",
  //             showConfirmButton: false,
  //             timer: 1500,
  //           });
  //           fetchUsersettingList();
  //         })
  //         .catch(function (error) {
  //           Swal.fire({
  //             icon: "error",
  //             title: "An Error Occured!",
  //             showConfirmButton: false,
  //             timer: 1500,
  //           });
  //         });
  //     }
  //   });
  // };

  return (
    <Layout>
      <div className="container">
        <h2 className="text-center mt-5 mb-3">
          Personal Resume Management System{" "}
        </h2>
        <div className="card">
          <div className="card-header row">
            <div class="col">
              <Link
                className="btn btn-outline-primary"
                to="/usersettingretrive"
              >
                User Setting
              </Link>
            </div>
            <div class="col">
              <Link
                className="btn btn-outline-primary"
                to="/menusettingretrive"
              >
                {" "}
                Menu Setting
              </Link>
            </div>
            <div class="col">
              <Link
                className="btn btn-outline-primary"
                to="/submenusettingretrive"
              >
                {" "}
                Sub menu Setting
              </Link>
            </div>
            <div class="col">
              <Link
                className="btn btn-outline-primary"
                to="/prs_coresprofobjretrive"
              >
                {" "}
                Correspondence profile Setting
              </Link>
            </div>
            <div class="col">
              <Link
                className="btn btn-outline-primary"
                to="/prs_educationretrive"
              >
                {" "}
                Education detail Setting
              </Link>
            </div>
            <div class="col">
              <Link
                className="btn btn-outline-primary"
                to="/prs_experienceretrive"
              >
                {" "}
                Experience details Setting
              </Link>
            </div>
            <div class="col">
              <Link
                className="btn btn-outline-primary"
                to="/prs_projectretrive"
              >
                {" "}
                Project details Setting
              </Link>
            </div>
            <div class="col">
              <Link
                className="btn btn-outline-primary"
                to="/prs_technicalretrive"
              >
                {" "}
                Technical details Setting
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
