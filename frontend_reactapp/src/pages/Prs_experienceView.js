import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout";

function Prs_experienceView() {
  const [id, setId] = useState(useParams().id);
  const [prs_experience, setPrs_experience] = useState({
    usercode: "",
    companyname: "",
    fromdate: "",
    todate: "",
    designation: "",
  });

  useEffect(() => {
    axios
      .get(`/api/v1/experience/prs_experience/${id}`)
      .then(function (response) {
        setPrs_experience(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <div className="container">
        <h2 className="text-center mt-5 mb-3">Show Experience details</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-info float-right" to="/home">
              {" "}
              View All details
            </Link>
          </div>
          <div className="card-body">
            <b className="text-muted">User Code:</b>
            <p>{prs_experience.usercode}</p>
            <b className="text-muted">Company Name:</b>
            <p>{prs_experience.companyname}</p>
            <b className="text-muted">From Date:</b>
            <p>{prs_experience.fromdate}</p>
            <b className="text-muted">To Date:</b>
            <p>{prs_experience.todate}</p>
            <b className="text-muted">Designation:</b>
            <p>{prs_experience.designation}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Prs_experienceView;
