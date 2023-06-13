import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "../components/Layout";

function SubmenusettingEdit() {
  const [id, setId] = useState(useParams().id);
  const [menucode, setMenucode] = useState("");
  const [submenuname, setSubmenuname] = useState("");
  const [url, setUrl] = useState("");

  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/personal_resume_management_system/submenusetting/${id}`)
      .then(function (response) {
        let submenusetting = response.data;
        setId(submenusetting.id);
        setMenucode(submenusetting.menucode);
        setSubmenuname(submenusetting.submenuname);
        setUrl(submenusetting.url);
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
      .put(`/api/personal_resume_management_system/submenusetting/${id}`, {
        menucode: menucode,
        submenuname: submenuname,
        url: url,
      })
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: "Submenu Details updated successfully!",
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
        <h2 className="text-center mt-5 mb-3">Edit Sub menu details</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-info float-right" to="/home">
              View All details
            </Link>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="menucode">Menu Code</label>
                <input
                  onChange={(event) => {
                    setMenucode(event.target.value);
                  }}
                  value={menucode}
                  type="text"
                  className="form-control"
                  id="menucode"
                  name="menucode"
                />
              </div>
              <div className="form-group">
                <label htmlFor="submenuname">Submenuname</label>
                <input
                  onChange={(event) => {
                    setSubmenuname(event.target.value);
                  }}
                  value={submenuname}
                  type="text"
                  className="form-control"
                  id="submenuname"
                  name="submenuname"
                />
              </div>
              <div className="form-group">
                <label htmlFor="url">URL</label>
                <input
                  onChange={(event) => {
                    setUrl(event.target.value);
                  }}
                  value={url}
                  type="text"
                  className="form-control"
                  id="url"
                  name="url"
                />
              </div>

              <button
                disabled={isSaving}
                onClick={handleSave}
                type="button"
                className="btn btn-outline-success mt-3"
              >
                Update Submenu Detail
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SubmenusettingEdit;
