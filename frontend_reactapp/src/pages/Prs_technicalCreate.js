import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "../components/Layout";

function Prs_technicalCreate() {
  const [usercode, setUsercode] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    axios
      .post("/api/v1/technical/prs_technical", {
        usercode: usercode,
        type: type,
        description: description,
      })
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: "Technical details saved successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsSaving(false);
        setUsercode("");
        setType("");
        setDescription("");
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
        <h2 className="text-center mt-5 mb-3">Add Technical details</h2>
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
                <label htmlFor="type">Type</label>
                <input
                  onChange={(event) => {
                    setType(event.target.value);
                  }}
                  value={type}
                  type="text"
                  className="form-control"
                  id="type"
                  name="type"
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

              <button
                disabled={isSaving}
                onClick={handleSave}
                type="button"
                className="btn btn-outline-primary mt-3"
              >
                Save technical details
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Prs_technicalCreate;
