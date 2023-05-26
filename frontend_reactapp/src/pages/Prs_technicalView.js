import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout";

function Prs_technicalView() {
  const [id, setId] = useState(useParams().id);
  const [prs_technical, setPrs_technical] = useState({
    usercode: "",
    type: "",
    description: "",
  });

  useEffect(() => {
    axios
      .get(`/api/personal_resume_management_system/prs_technical/${id}`)
      .then(function (response) {
        setPrs_technical(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <div className="container">
        <h2 className="text-center mt-5 mb-3">Show Technical details</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-info float-right" to="/">
              {" "}
              View All details
            </Link>
          </div>
          <div className="card-body">
            <b className="text-muted">User Code:</b>
            <p>{prs_technical.usercode}</p>
            <b className="text-muted">Type:</b>
            <p>{prs_technical.type}</p>
            <b className="text-muted">Description:</b>
            <p>{prs_technical.description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Prs_technicalView;
