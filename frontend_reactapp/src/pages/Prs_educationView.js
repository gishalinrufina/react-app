import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout";

function Prs_educationView() {
  const [id, setId] = useState(useParams().id);
  const [prs_education, setPrs_education] = useState({
    usercode: "",
    ug: "",
    pg: "",
    hsc: "",
    sslc: "",
  });

  useEffect(() => {
    axios
      .get(`/api/prs_education/${id}`)
      .then(function (response) {
        setPrs_education(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <div className="container">
        <h2 className="text-center mt-5 mb-3">Show Education details</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-info float-right" to="/">
              {" "}
              View All education details
            </Link>
          </div>
          <div className="card-body">
            <b className="text-muted">User Code:</b>
            <p>{prs_education.usercode}</p>
            <b className="text-muted">UG:</b>
            <p>{prs_education.ug}</p>
            <b className="text-muted">PG:</b>
            <p>{prs_education.pg}</p>
            <b className="text-muted">HSC:</b>
            <p>{prs_education.hsc}</p>
            <b className="text-muted">SSLC:</b>
            <p>{prs_education.sslc}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Prs_educationView;
