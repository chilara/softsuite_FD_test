import React from "react";
import search from "../../assets/search.png";

const Input = ({ placeholder }) => {
  return (
    <div className="input">
      <input className="searching" placeholder={placeholder} />
      <button className="btn">
        <img src={search} alt="search" className="img_input" />
      </button>
    </div>
  );
};

export default Input;
