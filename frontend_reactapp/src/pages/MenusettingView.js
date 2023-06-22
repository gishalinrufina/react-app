import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout";

function MenusettingView() {
  const [id, setId] = useState(useParams().id);
  const [menusetting, setMenusetting] = useState({
    menucode: "",
    menuname: "",
  });

  useEffect(() => {
    axios
      .get(`/api/v1/menu/menusetting/${id}`)
      .then(function (response) {
        setMenusetting(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <div className="container">
        <h2 className="text-center mt-5 mb-3">Show Menu</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-info float-right" to="/home">
              {" "}
              View All Menus
            </Link>
          </div>
          <div className="card-body">
            <b className="text-muted">Menu code:</b>
            <p>{menusetting.menucode}</p>
            <b className="text-muted">Menu name:</b>
            <p>{menusetting.menuname}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MenusettingView;
