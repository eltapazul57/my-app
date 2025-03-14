import React from "react";

const Button = ({ type, text, color }) => {
  return (
    <button type={type} className={`btn btn-${color} w-100`}>
      {text}
    </button>
  );
};

export default Button;
