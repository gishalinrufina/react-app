import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "../components/Layout";

function MenusettingCreate() {
  const [menucode, setMenucode] = useState("");
  const [menuname, setMenuname] = useState("");

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    axios
      .post("/api/personal_resume_management_system/menusetting", {
        menucode: menucode,
        menuname: menuname,
      })
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: "Menu details saved successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsSaving(false);
        setMenucode("");
        setMenuname("");
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
        <h2 className="text-center mt-5 mb-3">Add menu details</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-info float-right" to="/">
              Back
            </Link>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="menucode">Menu code</label>
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
                <label htmlFor="menuname">Menu name</label>
                <input
                  onChange={(event) => {
                    setMenuname(event.target.value);
                  }}
                  value={menuname}
                  type="text"
                  className="form-control"
                  id="menuname"
                  name="menuname"
                />
              </div>

              <button
                disabled={isSaving}
                onClick={handleSave}
                type="button"
                className="btn btn-outline-primary mt-3"
              >
                Save all
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MenusettingCreate;
