import React from "react";
import Sidebar from "./components/Sidebar.jsx";
import Navigation from "./components/Navigation";
import { useLocation, useNavigate } from "react-router";
function View() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location);
  console.log("location", location?.state);
  return (
    <>
      <Sidebar />
      
      {location?.state?.title}
      <button className="btn btn-primary" onClick={() => navigate(-1)}>
        Back
      </button>
    </>
  );
}

export default View;