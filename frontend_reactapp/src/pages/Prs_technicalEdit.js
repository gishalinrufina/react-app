import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "../components/Layout";

function Prs_technicalEdit() {
  const [id, setId] = useState(useParams().id);
  const [usercode, setUsercode] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/v1/technical/prs_technical/${id}`)
      .then(function (response) {
        let prs_technical = response.data;
        setId(prs_technical.id);
        setUsercode(prs_technical.usercode);
        setType(prs_technical.type);
        setDescription(prs_technical.description);
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
      .put(`/api/v1/technical/prs_technical/${id}`, {
        usercode: usercode,
        type: type,
        description: description,
      })
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: "Technical Details updated successfully!",
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
        <h2 className="text-center mt-5 mb-3">Edit Technical details</h2>
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
                className="btn btn-outline-success mt-3"
              >
                Update Technical Detail
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Prs_technicalEdit;
