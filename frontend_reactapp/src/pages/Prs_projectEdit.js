import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "../components/Layout";

function Prs_projectEdit() {
  const [id, setId] = useState(useParams().id);
  const [usercode, setUsercode] = useState("");
  const [pname, setPname] = useState("");
  const [techused, setTechused] = useState("");
  const [description, setDescription] = useState("");
  const [responsibility, setResponsibility] = useState("");

  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/personal_resume_management_system/prs_project/${id}`)
      .then(function (response) {
        let prs_project = response.data;
        setId(prs_project.id);
        setUsercode(prs_project.usercode);
        setPname(prs_project.pname);
        setTechused(prs_project.techused);
        setDescription(prs_project.description);
        setResponsibility(prs_project.responsibility);
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: error,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }, []);

  const handleSave = () => {
    setIsSaving(true);
    axios
      .put(`/api/personal_resume_management_system/prs_project/${id}`, {
        usercode: usercode,
        pname: pname,
        techused: techused,
        description: description,
        responsibility: responsibility,
      })
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: "Project Details updated successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsSaving(false);
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
        <h2 className="text-center mt-5 mb-3">Edit Project details</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-info float-right" to="/home">
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
                <label htmlFor="pname">Project name</label>
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
                className="btn btn-outline-success mt-3"
              >
                Update Project Detail
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Prs_projectEdit;
