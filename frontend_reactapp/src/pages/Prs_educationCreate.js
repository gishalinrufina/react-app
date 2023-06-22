import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "../components/Layout";

function Prs_educationCreate() {
  const [usercode, setUsercode] = useState("");
  const [ug, setUg] = useState("");
  const [pg, setPg] = useState("");
  const [hsc, setHsc] = useState("");
  const [sslc, setSslc] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    axios
      .post("/api/v1/education/prs_education", {
        usercode: usercode,
        ug: ug,
        pg: pg,
        hsc: hsc,
        sslc: sslc,
      })
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: "Education details saved successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsSaving(false);
        setUsercode("");
        setUg("");
        setPg("");
        setHsc("");
        setSslc("");
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
        <h2 className="text-center mt-5 mb-3">Add education details</h2>
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
                <label htmlFor="ug">UG</label>
                <input
                  onChange={(event) => {
                    setUg(event.target.value);
                  }}
                  value={ug}
                  type="text"
                  className="form-control"
                  id="ug"
                  name="ug"
                />
              </div>
              <div className="form-group">
                <label htmlFor="pg">pg</label>
                <input
                  onChange={(event) => {
                    setPg(event.target.value);
                  }}
                  value={pg}
                  type="text"
                  className="form-control"
                  id="pg"
                  name="pg"
                />
              </div>
              <div className="form-group">
                <label htmlFor="hsc">HSC</label>
                <input
                  onChange={(event) => {
                    setHsc(event.target.value);
                  }}
                  value={hsc}
                  type="text"
                  className="form-control"
                  id="hsc"
                  name="hsc"
                />
              </div>
              <div className="form-group">
                <label htmlFor="sslc">SSLC</label>
                <input
                  onChange={(event) => {
                    setSslc(event.target.value);
                  }}
                  value={sslc}
                  type="text"
                  className="form-control"
                  id="sslc"
                  name="sslc"
                />
              </div>
              <button
                disabled={isSaving}
                onClick={handleSave}
                type="button"
                className="btn btn-outline-primary mt-3"
              >
                Save education details
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Prs_educationCreate;
