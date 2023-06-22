import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "../components/Layout";

function MenusettingEdit() {
  const [id, setId] = useState(useParams().id);
  const [menucode, setMenucode] = useState("");
  const [menuname, setMenuname] = useState("");

  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/v1/menu/menusetting/${id}`)
      .then(function (response) {
        let menusetting = response.data;
        setId(menusetting.id);
        setMenucode(menusetting.menucode);
        setMenuname(menusetting.menuname);
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
      .put(`/api/v1/menu/menusetting/${id}`, {
        menucode: menucode,
        menuname: menuname,
      })
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: "Menu Details updated successfully!",
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
        <h2 className="text-center mt-5 mb-3">Edit Menu</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-info float-right" to="/home">
              View All menu
            </Link>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">Menu code</label>
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
                <label htmlFor="name">Menu name</label>
                <input
                  onChange={(event) => {
                    setMenuname(event.target.value);
                  }}
                  value={menuname}
                  type="text"
                  className="form-control"
                  id="password"
                  name="password"
                />
              </div>

              <button
                disabled={isSaving}
                onClick={handleSave}
                type="button"
                className="btn btn-outline-success mt-3"
              >
                Update Menu Detail
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MenusettingEdit;
