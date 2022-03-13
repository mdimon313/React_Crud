import React from "react";

function Input({ type, placeholder, ...props }) {
  return <input type={type} placeholder={placeholder} {...props} />;
}

export default Input;
