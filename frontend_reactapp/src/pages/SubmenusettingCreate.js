import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "../components/Layout";

function SubmenusettingCreate() {
  const [menucode, setMenucode] = useState("");
  const [submenuname, setSubmenuname] = useState("");
  const [url, setUrl] = useState("");

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    axios
      .post("/api/personal_resume_management_system/submenusetting", {
        menucode: menucode,
        submenuname: submenuname,
        url: url,
      })
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: "Sub menu details saved successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsSaving(false);
        setMenucode("");
        setSubmenuname("");
        setUrl("");
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
        <h2 className="text-center mt-5 mb-3">Add sub menu details</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-info float-right" to="/">
              View all submenu details
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
                <label htmlFor="submenuname">Sub Menu Name</label>
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
                className="btn btn-outline-primary mt-3"
              >
                Save sub menu details
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SubmenusettingCreate;
