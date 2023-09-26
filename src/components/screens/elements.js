import React from "react";
import right_arrow from "../../assets/right_arrow.png";

const Elements = () => {
  return (
    <div className="elements">
      <div className="page_title">
        <p className="text_1">Payroll Management</p>
        <img src={right_arrow} alt="arrow" img_group />
        <p className="text_1">Element Setup</p>
        <img src={right_arrow} alt="arrow" img_group />
        <p className="text_2">Elements</p>
      </div>
    </div>
  );
};

export default Elements;
