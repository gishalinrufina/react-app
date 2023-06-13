import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "../components/Layout";

function Prs_coresprofobjCreate() {
  const [usercode, setUsercode] = useState("");
  const [correspondence, setCorrespondence] = useState("");
  const [profile, setProfile] = useState("");
  const [objective, setObjective] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    axios
      .post("/api/personal_resume_management_system/prs_coresprofobj", {
        usercode: usercode,
        correspondence: correspondence,
        profile: profile,
        objective: objective,
      })
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: "Correspondence details saved successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsSaving(false);
        setUsercode("");
        setCorrespondence("");
        setProfile("");
        setObjective("");
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
        <h2 className="text-center mt-5 mb-3">Add correspondence details</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-info float-right" to="/home">
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
                <label htmlFor="correspondence">Correspondence</label>
                <input
                  onChange={(event) => {
                    setCorrespondence(event.target.value);
                  }}
                  value={correspondence}
                  type="text"
                  className="form-control"
                  id="correspondence"
                  name="correspondence"
                />
              </div>
              <div className="form-group">
                <label htmlFor="profile">Profile</label>
                <input
                  onChange={(event) => {
                    setProfile(event.target.value);
                  }}
                  value={profile}
                  type="text"
                  className="form-control"
                  id="profile"
                  name="profile"
                />
              </div>
              <div className="form-group">
                <label htmlFor="objective">Objective</label>
                <input
                  onChange={(event) => {
                    setObjective(event.target.value);
                  }}
                  value={objective}
                  type="text"
                  className="form-control"
                  id="objective"
                  name="objective"
                />
              </div>
              <button
                disabled={isSaving}
                onClick={handleSave}
                type="button"
                className="btn btn-outline-primary mt-3"
              >
                Save correspondence details
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Prs_coresprofobjCreate;
