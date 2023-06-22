import React, { useState, useEffect } from "react";
import "./Health.css";
import Loading from "../Loading/Loading";
import axios from "axios";
import NotFound from "../NotFound/NotFound";
import BASEURL from "../../constants/base";

const HealthComponent = () => {
  const [healthData, setHealthData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASEURL}/health`)
      .then((res) => {
        setHealthData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="health-component">
      <h1>Health Status</h1>
      {loading ? (
        <Loading />
      ) : healthData ? (
        <>
          <p>Server: {healthData.server}</p>
          <p>Database: {healthData.database}</p>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default HealthComponent;
