import React from "react";

const InputField = ({ type, placeholder, icon }) => {
  return (
    <div className="input-wrapper">
      <i className={`fa fa-${icon}`}></i>
      <input
        className="input-field"
        type={type}
        placeholder={placeholder}
        autoComplete={type === "password" ? "current-password" : "email"}
      />
    </div>
  );
};

export default InputField;
