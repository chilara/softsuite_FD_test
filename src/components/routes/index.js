import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../screens/dashboard";
import Create from "../screens/create";

// import { store } from "../store";
// import { Provider } from "react-redux";

const Paths = () => {
  return (
    <div>
      {/* <Provider store={store}> */}
      <Routes>
        <Route path="/" index element={<Dashboard />} />
        <Route path="create" element={<Create />} />
      </Routes>
      {/* </Provider> */}
    </div>
  );
};

export default Paths;
