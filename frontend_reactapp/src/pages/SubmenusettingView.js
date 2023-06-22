import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout";

function SubmenusettingView() {
  const [id, setId] = useState(useParams().id);
  const [submenusetting, setSubmenusetting] = useState({
    menucode: "",
    submenuname: "",
    url: "",
  });

  useEffect(() => {
    axios
      .get(`/api/v1/submenu/submenusetting/${id}`)
      .then(function (response) {
        setSubmenusetting(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <div className="container">
        <h2 className="text-center mt-5 mb-3">Show Submenu details</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-info float-right" to="/home">
              {" "}
              View All details
            </Link>
          </div>
          <div className="card-body">
            <b className="text-muted">Menu Code:</b>
            <p>{submenusetting.menucode}</p>
            <b className="text-muted">Sub menu name:</b>
            <p>{submenusetting.submenuname}</p>
            <b className="text-muted">URL:</b>
            <p>{submenusetting.url}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SubmenusettingView;
