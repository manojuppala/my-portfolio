import React from "react";

function Input({ type, id, placeholder }) {
  return (
    <input
      className="form-control text-light bg-dark input-query"
      type={type}
      id={id}
      placeholder={placeholder}
    />
  );
}

export default Input;
