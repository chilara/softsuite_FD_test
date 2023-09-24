import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Elements from "./elements";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="main_section">
        <Sidebar />
        <Elements />
      </div>
    </div>
  );
};

export default Dashboard;
