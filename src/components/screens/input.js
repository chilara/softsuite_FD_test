import React from "react";
import search from "../../assets/search.png";

const Input = ({
  placeholder,
  containerStyle,
  inputStyle,
  buttonStyle,
  imgStyle,
}) => {
  return (
    <div className={containerStyle}>
      <input className={inputStyle} placeholder={placeholder} />
      <button className={buttonStyle}>
        <img src={search} alt="search" className={imgStyle} />
      </button>
    </div>
  );
};

export default Input;
