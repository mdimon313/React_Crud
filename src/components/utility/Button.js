import React from "react";

function Button({ type, submit, children, ...res }) {
  return (
    <button type={type} onClick={submit} {...res}>
      {children}
    </button>
  );
}

export default Button;
