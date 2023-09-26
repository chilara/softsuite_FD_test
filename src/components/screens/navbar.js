import React from "react";
import logo from "./../../assets/logo.png";
import homie from "../../assets/homie.png";
import downArrow from "../../assets/downArrow.png";
import notifi from "../../assets/notifi.png";
import avi from "../../assets/avi.png";
import Input from "./input";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="change">
        <div className="change-child1">
          <img src={homie} alt="homie" className="homie" />
          <div className="text-con">
            <p className="text-change">Change Organization</p>
            <p className="paperSoft">PaperSoft Limited</p>
          </div>
          <img src={downArrow} alt="downArrow" className="arrow" />
        </div>
        <Input
          containerStyle="containStyle1"
          inputStyle="inputStyle1"
          buttonStyle="buttonStyle1"
          placeholder="Searching for something..."
          imgStyle="img_input"
        />
        <div className="avi_section">
          <img src={notifi} alt="notification" className="img_notifi" />
          <div className="avi_section_child">
            <img src={avi} alt="avi" className="img_avi" />
            <div className="text-con">
              <p className="paperSoft">Henry Okoro</p>
              <p className="text-change">Payroll Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
