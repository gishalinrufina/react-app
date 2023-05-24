import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "../components/Layout";

function Prs_educationEdit() {
  const [id, setId] = useState(useParams().id);
  const [usercode, setUsercode] = useState("");
  const [ug, setUg] = useState("");
  const [pg, setPg] = useState("");
  const [hsc, setHsc] = useState("");
  const [sslc, setSslc] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/prs_education/${id}`)
      .then(function (response) {
        let prs_education = response.data;
        setId(prs_education.id);
        setUsercode(prs_education.usercode);
        setUg(prs_education.ug);
        setPg(prs_education.pg);
        setHsc(prs_education.hsc);
        setSslc(prs_education.sslc);
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
      .put(`/api/prs_education/${id}`, {
        usercode: usercode,
        ug: ug,
        pg: pg,
        hsc: hsc,
        sslc: sslc,
      })
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: "Education Details updated successfully!",
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
        <h2 className="text-center mt-5 mb-3">Edit Education details</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-info float-right" to="/">
              View All Education details
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
                <label htmlFor="pg">PG</label>
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
              <button
                disabled={isSaving}
                onClick={handleSave}
                type="button"
                className="btn btn-outline-success mt-3"
              >
                Update Education Detail
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Prs_educationEdit;
