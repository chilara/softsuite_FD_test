import React, { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Elements from "./elements";
import Create from "./create";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="main_section">
        <Sidebar />
        <Elements onOpen={() => setIsOpen(true)} />
      </div>

      <Create isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Dashboard;
