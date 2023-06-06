import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "../components/Layout";

function Prs_projectCreate() {
  const [usercode, setUsercode] = useState("");
  const [pname, setPname] = useState("");
  const [techused, setTechused] = useState("");
  const [description, setDescription] = useState("");
  const [responsibility, setResponsibility] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    axios
      .post("/api/personal_resume_management_system/prs_project", {
        usercode: usercode,
        pname: pname,
        techused: techused,
        description: description,
        responsibility: responsibility,
      })
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: "Project details saved successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsSaving(false);
        setUsercode("");
        setPname("");
        setTechused("");
        setDescription("");
        setResponsibility("");
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
        <h2 className="text-center mt-5 mb-3">Add Project details</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-info float-right" to="/">
              Back
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
                <label htmlFor="pname">Project Name</label>
                <input
                  onChange={(event) => {
                    setPname(event.target.value);
                  }}
                  value={pname}
                  type="text"
                  className="form-control"
                  id="pname"
                  name="pname"
                />
              </div>
              <div className="form-group">
                <label htmlFor="techused">Technology used</label>
                <input
                  onChange={(event) => {
                    setTechused(event.target.value);
                  }}
                  value={techused}
                  type="text"
                  className="form-control"
                  id="techused"
                  name="techused"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                  value={description}
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                />
              </div>
              <div className="form-group">
                <label htmlFor="responsibility">Responsibility</label>
                <input
                  onChange={(event) => {
                    setResponsibility(event.target.value);
                  }}
                  value={responsibility}
                  type="text"
                  className="form-control"
                  id="responsibility"
                  name="responsibility"
                />
              </div>
              <button
                disabled={isSaving}
                onClick={handleSave}
                type="button"
                className="btn btn-outline-primary mt-3"
              >
                Save project details
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Prs_projectCreate;
