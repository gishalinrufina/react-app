import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "../components/Layout";

function Prs_experienceCreate() {
  const [usercode, setUsercode] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [fromdate, setFromdate] = useState("");
  const [todate, setTodate] = useState("");
  const [designation, setDesignation] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    axios
      .post("/api/personal_resume_management_system/prs_experience", {
        usercode: usercode,
        companyname: companyname,
        fromdate: fromdate,
        todate: todate,
        designation: designation,
      })
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: "Experience details saved successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsSaving(false);
        setUsercode("");
        setCompanyname("");
        setFromdate("");
        setTodate("");
        setDesignation("");
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: error,
          showConfirmButton: false,
          timer: 1500,
        });
        setIsSaving(false);
      });
  };

  return (
    <Layout>
      <div className="container">
        <h2 className="text-center mt-5 mb-3">Add a new experience detail</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-info float-right" to="/">
              View All details
            </Link>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="usercode">User Code</label>
                <input
                  onChange={(event) => {
                    setUsercode(event.target.value);
                  }}
                  value={usercode}
                  type="text"
                  className="form-control"
                  id="usercode"
                  name="usercode"
                />
              </div>
              <div className="form-group">
                <label htmlFor="companyname">Company Name</label>
                <input
                  onChange={(event) => {
                    setCompanyname(event.target.value);
                  }}
                  value={companyname}
                  type="text"
                  className="form-control"
                  id="companyname"
                  name="companyname"
                />
              </div>
              <div className="form-group">
                <label htmlFor="fromdate">From Date</label>
                <input
                  onChange={(event) => {
                    setFromdate(event.target.value);
                  }}
                  value={fromdate}
                  type="text"
                  className="form-control"
                  id="fromdate"
                  name="fromdate"
                />
              </div>
              <div className="form-group">
                <label htmlFor="todate">To Date</label>
                <input
                  onChange={(event) => {
                    setTodate(event.target.value);
                  }}
                  value={todate}
                  type="text"
                  className="form-control"
                  id="todate"
                  name="todate"
                />
              </div>
              <div className="form-group">
                <label htmlFor="designation">Designation</label>
                <input
                  onChange={(event) => {
                    setDesignation(event.target.value);
                  }}
                  value={designation}
                  type="text"
                  className="form-control"
                  id="designation"
                  name="designation"
                />
              </div>
              <button
                disabled={isSaving}
                onClick={handleSave}
                type="button"
                className="btn btn-outline-primary mt-3"
              >
                Save Experience detail
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Prs_experienceCreate;
