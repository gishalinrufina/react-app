import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout";

function Prs_coresprofobjView() {
  const [id, setId] = useState(useParams().id);
  const [prs_coresprofobj, setPrs_coresprofobj] = useState({
    usercode: "",
    correspondence: "",
    profile: "",
    objective: "",
  });

  useEffect(() => {
    axios
      .get(`/api/prs_coresprofobj/${id}`)
      .then(function (response) {
        setPrs_coresprofobj(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <div className="container">
        <h2 className="text-center mt-5 mb-3">Show Correspondence details</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-info float-right" to="/">
              {" "}
              View All details
            </Link>
          </div>
          <div className="card-body">
            <b className="text-muted">User Code:</b>
            <p>{prs_coresprofobj.username}</p>
            <b className="text-muted">correspondence:</b>
            <p>{prs_coresprofobj.email}</p>
            <b className="text-muted">Profile:</b>
            <p>{prs_coresprofobj.mobileno}</p>
            <b className="text-muted">Objective:</b>
            <p>{prs_coresprofobj.mobileno}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Prs_coresprofobjView;
